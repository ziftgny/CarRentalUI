import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../../services/customer.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  customers:Customer[]=[];
  constructor(private customerService:CustomerService) {}
  ngOnInit(): void {
    this.GetCustomers();
  }
  GetCustomers(){
    this.customerService.GetCustomers().subscribe((result)=>{
      this.customers=result.data;
    })
  }
}
