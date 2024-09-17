import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../components/models/customerResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL="https://localhost:7199/api/Customers/getalldetails";
  constructor(private httpClient:HttpClient) { }
  GetCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiURL);
  }
}
