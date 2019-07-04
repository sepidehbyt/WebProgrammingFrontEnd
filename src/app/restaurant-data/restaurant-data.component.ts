import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-data',
  templateUrl: './restaurant-data.component.html',
  styleUrls: ['./restaurant-data.component.css']
})
export class RestaurantDataComponent implements OnInit {
  restaurantName = "باگت";
  average_rate = 4.7;
  categories = "ساندویچ • فست فود • برگر • پیتزا • سالاد • غذای ایرانی";
  address = "تهران، پاسداران، بالا تر از برج سفید، نبش بوستان دهم";
  constructor() { }

  ngOnInit() {
  }

}
