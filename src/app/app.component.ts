import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car/car.component';
import { BrandComponent } from './components/brand/brand/brand.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NaviComponent,CarComponent,BrandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarRentalUI';
}
