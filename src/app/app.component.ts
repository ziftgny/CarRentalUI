import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car/car.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { ColorComponent } from './components/color/color/color.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { RentalComponent } from './components/rental/rental/rental.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NaviComponent,CarComponent,BrandComponent,ColorComponent,CustomerComponent,RentalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarRentalUI';
}
