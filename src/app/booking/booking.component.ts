import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  currentStep = 0;
  formData: any;

  handleFormSubmit(form: FormGroup) {
    this.formData = form.value;
    console.log(form.value);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookingService: BookingService) {}
  
  ngOnInit() {
    this.bookingService.formSubmit$.subscribe(formData => {
      this.formData = formData;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const bookingSteps = ['car-selection', 'extras', 'contact-details', 'payment'];
        if (!bookingSteps.some(step => event.url.includes(step))) {
          this.bookingService.formData = {}; // Reset the form data
        }
      }

      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('car-selection')) {
          this.currentStep = 1;
        } else if (event.urlAfterRedirects.includes('extras')) {
          this.currentStep = 2;
        } else if (event.urlAfterRedirects.includes('contact-details')) {
          this.currentStep = 3;
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

  onTest() {
    console.log(this.bookingService.formData);
  }
}
