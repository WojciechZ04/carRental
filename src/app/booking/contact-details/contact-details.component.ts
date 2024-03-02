import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  constructor(private route:ActivatedRoute, private router: Router) {}

  onBack() {
    this.router.navigate(['../extras'], { relativeTo: this.route });
  }
  onNext() {
    this.router.navigate(['../payment'], { relativeTo: this.route });
  }
}
