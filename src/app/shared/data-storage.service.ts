import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingService } from '../booking/booking.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}
  selectedOption = new BehaviorSubject<string>('');
  availabilityFilter = new BehaviorSubject<boolean>(false);

  getCars(): Observable<any> {
    return this.http.get<any>('/assets/data.json');
  }
}
