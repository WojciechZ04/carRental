import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';
import { FormDirtyService } from '../../services/form-dirty.service';



@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css',
})
export class ExtrasComponent implements OnInit {
  extrasForm: FormGroup;
  extras = [
    {
      name: 'Option 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra.',
    },
    {
      name: 'Option 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra.',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const group = {};
    this.extras.forEach((extra) => {
      group[extra.name] = this.formBuilder.control(false);
    });

    this.extrasForm = this.formBuilder.group(group);

    // If the form data is available, populate the form with the data
    if (this.bookingService.formData.extras) {
      this.extrasForm.setValue(this.bookingService.formData.extras);
    }
  }

  onBack() {
    this.router.navigate(['../car-selection'], { relativeTo: this.route });
  }
  onNext() {
    if (this.extrasForm.valid) {
      this.bookingService.formSubmitted('extras', this.extrasForm);
      this.router.navigate(['../contact-details'], { relativeTo: this.route });
    }
  }
}
