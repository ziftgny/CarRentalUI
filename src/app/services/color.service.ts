import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../components/models/colorResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiURL="https://localhost:7199/api/Colors/getall";
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ColorResponseModel>
  {
    return this.httpClient.get<ColorResponseModel>(this.apiURL);
  }
}
