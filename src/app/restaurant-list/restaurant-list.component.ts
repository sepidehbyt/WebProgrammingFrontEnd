import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurantList = "";
  constructor(restaurantService : RestaurantService) {
    restaurantService.getRestaurants('تهران','میرداماد','').subscribe(
      data => { this.restaurantList = data},
      err => console.error(err),
      () => console.log('done loading foods ' + JSON.stringify(this.restaurantList))
    );;
  }

  ngOnInit() {

  }

}
