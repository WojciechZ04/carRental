import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css'
})
export class ExtrasComponent {
  constructor(private route:ActivatedRoute, private router: Router) {}

  onBack() {
    this.router.navigate(['../car-selection'], { relativeTo: this.route });
  }
  onNext() {
    this.router.navigate(['../contact-details'], { relativeTo: this.route });
  }
}
