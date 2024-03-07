import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.component.html',
  styleUrl: './car-selection.component.css',
})
export class CarSelectionComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<FormGroup>();

  carSelectionForm = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    car: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingService.resetForm$.subscribe(() => {
      this.carSelectionForm.reset();
    });
  }

  onNext() {
    if (this.carSelectionForm.valid) {
      this.bookingService.formSubmitted(this.carSelectionForm);
      this.router.navigate(['../extras'], { relativeTo: this.route });
    }
  }
}
