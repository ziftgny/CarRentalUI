import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../components/models/rentalResponseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiURL="https://localhost:7199/api/Rentals/getalldetails";
  constructor(private httpClient:HttpClient) { }
  
  GetRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiURL);
  }
}
