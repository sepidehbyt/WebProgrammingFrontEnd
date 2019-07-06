import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from '../restaurant-data.service';

@Component({
  selector: 'app-restaurant-data',
  templateUrl: './restaurant-data.component.html',
  styleUrls: ['./restaurant-data.component.css']
})
export class RestaurantDataComponent implements OnInit {
  restaurantName = "باگت";
  average_rate = 4.7;
  data = {};
  categories = "ساندویچ • فست فود • برگر • پیتزا • سالاد • غذای ایرانی";
  address = "تهران، پاسداران، بالا تر از برج سفید، نبش بوستان دهم";
  constructor(restaurantData : RestaurantDataService) {
    restaurantData.getRestaurants(1).subscribe(
      data => { this.data = data},
      err => console.error(err),
      () => console.log('done loading foods ' + this.data)
    );
  }

  ngOnInit() {
  }

}
