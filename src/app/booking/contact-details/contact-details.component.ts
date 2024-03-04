import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit{

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })

  constructor(private route:ActivatedRoute, private router: Router) {}


  ngOnInit(): void {

  }
  onBack() {
    this.router.navigate(['../extras'], { relativeTo: this.route });
  }
  onNext() {
    this.router.navigate(['../payment'], { relativeTo: this.route });
  }
}
