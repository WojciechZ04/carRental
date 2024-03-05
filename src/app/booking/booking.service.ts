import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class BookingService {
  private formSubmitSource = new Subject<any>();
  formSubmit$ = this.formSubmitSource.asObservable();

  formSubmitted(form: any) {
    this.formSubmitSource.next(form);
  }
}