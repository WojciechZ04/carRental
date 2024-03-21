import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  steps = [
    { route: 'car-selection', name: '1. Select car' },
    { route: 'extras', name: '2. Choose extras' },
    { route: 'contact-details', name: '3. Fill contact form' },
    { route: 'payment', name: '4. Pay' }
  ]; // Add as many steps as you have

  private formSubmitSource = new Subject<any>();
  formSubmit$ = this.formSubmitSource.asObservable();

  private resetFormSource = new Subject<void>();
  resetForm$ = this.resetFormSource.asObservable();

  formData: any = {};

  formSubmitted(key: string, form: any) {
    this.formData[key] = form.value;
    this.formSubmitSource.next(this.formData);
  }

  resetForm() {
    this.resetFormSource.next();
  }

  canNavigateToStep(step: string): boolean {
    if (step === 'car-selection') {
      // The user can always navigate to the first step
      return true;
    } else if (step === 'extras' && this.formData['carSelection']) {
      // The user cannot navigate to other steps if the carSelection form is not valid
      return true;
    } else if (step === 'contact-details' && this.formData['extras']) {
      return true;
    } else if (step === 'payment' && this.formData['contactDetails']) {
      return true;
    } else {
      return false;
    }
  }
}
