import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../components/models/brandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiURL="https://localhost:7199/api/Brands/getall";
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<BrandResponseModel>
  {
      return this.httpClient.get<BrandResponseModel>(this.apiURL);
  }
}
