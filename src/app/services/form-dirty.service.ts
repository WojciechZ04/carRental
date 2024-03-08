import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyService {
  isDirty = false;
}