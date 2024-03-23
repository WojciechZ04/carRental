import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent implements OnInit {
  data: any = [];

  constructor (private dataStorageService: DataStorageService) {}


  ngOnInit(): void {
    this.dataStorageService.getCars().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
