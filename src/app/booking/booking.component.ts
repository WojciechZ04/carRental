import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  isLinear = true;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
  });

  firstFormGroup: FormGroup;
 
  

  onNext() {
    console.log('First form validity:', this.firstFormGroup.valid);
    
    console.log(this.range.get('start')?.value);
    console.log(this.range.get('end')?.value);
  }

  disableSelect = new FormControl(true);
  
  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      start: [this.range.get('start')?.value || '', Validators.required],
      end: [this.range.get('end')?.value || '', Validators.required],
    });
    this.range.valueChanges.subscribe(value => {
      this.firstFormGroup.patchValue(value);

      if (this.range.valid) {
        this.disableSelect.setValue(false);
      }
    });
  }

}
