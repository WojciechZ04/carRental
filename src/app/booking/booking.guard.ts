import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard implements CanActivate {
  constructor(private bookingService: BookingService) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const step = next.url[0].path;    
    return this.bookingService.canNavigateToStep(step);
  }
}

