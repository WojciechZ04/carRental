import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { BookingService } from './booking.service';
import { FormDirtyService } from '../services/form-dirty.service';
import { DataStorageService } from '../shared/data-storage.service';

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
          this.totalPrice = this.bookingService.formData.carSelection.price;
        } else if (event.urlAfterRedirects.includes('contact-details')) {
          this.currentStep = 3;
          this.totalPrice = this.totalPrice + this.bookingService.formData.extras.totalPrice;
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
  }

  canDeactivate(): boolean {
    if (this.formDirtyService.isDirty) {
      return window.confirm('You have unsaved changes. Are you sure you want to abandon the booking?');
    }
    return true;
  }

  onTest() {
    console.log(this.bookingService.formData);
  }
}
