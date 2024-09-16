import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carDetailsResponseModel } from '../components/models/carDetailsResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiURL="https://localhost:7199/api/Cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<carDetailsResponseModel>
  {
    return this.httpClient.get<carDetailsResponseModel>(this.apiURL);
  }
}
