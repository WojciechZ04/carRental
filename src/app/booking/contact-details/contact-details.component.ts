import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit{
  @Output() formSubmit = new EventEmitter<FormGroup>();

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
  })

  constructor(private route:ActivatedRoute, private router: Router, private bookingService: BookingService) {}


  ngOnInit(): void {

  }

  onBack() {
    this.router.navigate(['../extras'], { relativeTo: this.route });
  }
  onNext() {
    if(this.contactForm.valid) {
      this.bookingService.formSubmitted(this.contactForm);
      // this.router.navigate(['../payment'], { relativeTo: this.route });
    }
  }
}
