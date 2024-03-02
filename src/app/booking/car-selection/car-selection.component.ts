import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.component.html',
  styleUrl: './car-selection.component.css'
})
export class CarSelectionComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  onNext() {
    this.router.navigate(['../extras'], { relativeTo: this.route });
  }

}
