import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { CommonModule } from '@angular/common';
import { CarDetails } from '../../models/carDetails';
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
  carDetails:CarDetails[]=[];
  dataLoaded:boolean=false;
  constructor(private carService:CarService) {
    
  }
  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
     this.carService.getCars().subscribe((result)=>{
      this.carDetails=result.data;
      this.dataLoaded=true;
     });
  }
}
