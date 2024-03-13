import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { FormDirtyService } from '../../services/form-dirty.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.component.html',
  styleUrl: './car-selection.component.css',
})
export class CarSelectionComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<FormGroup>();
  data: any;
  cars = [
    { name: 'Car 1', description: 'Description of Car 1', price: 100},
    { name: 'Car 2', description: 'Description of Car 2', price: 200},
    { name: 'Car 3', description: 'Description of Car 3', price: 300},
  ];

  carSelectionForm = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    car: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private formDirtyService: FormDirtyService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.getCars().subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
    // If the form data is available, populate the form with the data
    if (this.bookingService.formData.carSelection) {
      this.carSelectionForm.setValue(this.bookingService.formData.carSelection);
    }
    this.carSelectionForm.valueChanges.subscribe(formData => {
      this.formDirtyService.isDirty = this.carSelectionForm.dirty;
    });
    
    // Reset the form when the resetForm$ event is emitted
    this.bookingService.resetForm$.subscribe(() => {
      this.carSelectionForm.reset();
    });
  }

  onNext(carName: string, carPrice: number) {
    this.carSelectionForm.get('car').setValue(carName);
    this.carSelectionForm.get('price').setValue(carPrice);
    if (this.carSelectionForm.valid) {
      this.bookingService.formSubmitted('carSelection', this.carSelectionForm);
      this.router.navigate(['../extras'], { relativeTo: this.route });
    }
  }
}
