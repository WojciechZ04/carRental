import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { BookingService } from './booking.service';
import { FormDirtyService } from '../services/form-dirty.service';
import { DataStorageService } from '../shared/data-storage.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  steps: string[];
  currentStep = 0;
  formData: any;
  totalPrice: number;
  cars: any;
  sortControl = new FormControl('');
  filterControl = new FormControl(false);

  constructor(
    private router: Router,
    private bookingService: BookingService,
    private formDirtyService: FormDirtyService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.steps = this.bookingService.steps;

    this.bookingService.formSubmit$.subscribe((formData) => {
      this.formData = formData;
    });

    this.sortControl.valueChanges.subscribe((selectedOption) => {
      this.dataStorageService.selectedOption.next(selectedOption);
    });

    this.filterControl.valueChanges.subscribe((isChecked) => {
      this.dataStorageService.availabilityFilter.next(isChecked);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const bookingSteps = [
          'car-selection',
          'extras',
          'contact-details',
          'payment',
        ];
        if (!bookingSteps.some((step) => event.url.includes(step))) {
          this.bookingService.formData = {}; // Reset the form data
        }
      }

      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('car-selection')) {
          this.currentStep = 1;
        } else if (event.urlAfterRedirects.includes('extras')) {
          this.currentStep = 2;
          const days = this.calculateDateDifference(this.bookingService.formData.carSelection.start, this.bookingService.formData.carSelection.end);
          console.log('Days:', days);
          this.totalPrice = this.bookingService.formData.carSelection.price * days;
        } else if (event.urlAfterRedirects.includes('contact-details')) {
          this.currentStep = 3;
          this.totalPrice =
            this.totalPrice + this.bookingService.formData.extras.totalPrice;
        } else if (event.urlAfterRedirects.includes('payment')) {
          this.currentStep = 4;
        }
        localStorage.setItem('currentStep', this.currentStep.toString());
      }
    });

    const storedStep = localStorage.getItem('currentStep');
    if (storedStep) {
      this.currentStep = Number(storedStep);
    }

    console.log('Current Step:', this.currentStep);
    
  }

  canDeactivate(): boolean {
    if (this.formDirtyService.isDirty) {
      return window.confirm(
        'You have unsaved changes. Are you sure you want to abandon the booking?'
      );
    }
    return true;
  }

  onTest() {
    console.log(this.bookingService.formData);
    console.log(this.bookingService.formData.carSelection.start);
  }

  calculateDateDifference(start: Date, end: Date) {
    const differenceInMiliseconds = end.getTime() - start.getTime();
    const differenceInDays = differenceInMiliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays + 1;
  }
}
