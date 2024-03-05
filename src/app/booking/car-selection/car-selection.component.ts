import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.component.html',
  styleUrl: './car-selection.component.css',
})
export class CarSelectionComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      car: ['', Validators.required],
    });
  }

  onNext() {
    console.log(this.form.value.car);
    console.log(this.form.value.start);
    console.log(this.form.value.end);
    
    
    if(this.form.valid) {
      this.router.navigate(['../extras'], { relativeTo: this.route });
    }
  }
}
