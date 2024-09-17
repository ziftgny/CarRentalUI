import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalService } from '../../../services/rental.service';
import { Rental } from '../../models/rental';
@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit{
  rentals:Rental[]=[];
  constructor(private rentalService:RentalService) {}
  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.rentalService.GetRentals().subscribe((result)=>{
      this.rentals=result.data;
    })
  }
}
