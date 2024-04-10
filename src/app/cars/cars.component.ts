import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent implements OnInit {
  data: any = [];
  displayedData: any = []; // Add this line
  length = 50;
  pageSize = 2;
  pageIndex = 0;

  handlePageEvent(e: any) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.updateDisplayedData(); // Add this line
  }

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.dataStorageService.getCars().subscribe(
      (data) => {
        this.data = data;
        this.updateDisplayedData(); // Add this line
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // Add this method
  updateDisplayedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedData = this.data.slice(start, end);
  }
}
