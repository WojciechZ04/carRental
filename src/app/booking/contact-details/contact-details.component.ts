import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { FormDirtyService } from '../../services/form-dirty.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css',
})
export class ContactDetailsComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<FormGroup>();

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private formDirtyService: FormDirtyService
  ) {}

  ngOnInit(): void {
    // If the form data is available, populate the form with the data
    if (this.bookingService.formData.contactDetails) {
      this.contactForm.setValue(this.bookingService.formData.contactDetails);
    }
    this.contactForm.valueChanges.subscribe(formData => {
      this.bookingService.formData.contactDetails = formData;
      this.formDirtyService.isDirty = this.contactForm.dirty;
    });

    // Reset the form when the resetForm$ event is emitted
    this.bookingService.resetForm$.subscribe(() => {
      this.contactForm.reset();
    });
  }

  onBack() {
    this.router.navigate(['../extras'], { relativeTo: this.route });
  }
  onNext() {
    if (this.contactForm.valid) {
      this.bookingService.formSubmitted(this.contactForm);
      this.router.navigate(['../payment'], { relativeTo: this.route });
    }
  }
}
