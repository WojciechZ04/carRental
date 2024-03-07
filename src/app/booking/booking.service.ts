import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class BookingService {
  private formSubmitSource = new Subject<any>();
  formSubmit$ = this.formSubmitSource.asObservable();

  private resetFormSource = new Subject<void>();
  resetForm$ = this.resetFormSource.asObservable();

  formData: any = {};

  formSubmitted(form: any) {
    this.formData = { ...this.formData, ...form.value };
    this.formSubmitSource.next(this.formData);
  }

  resetForm() {
    this.resetFormSource.next();
  }
}