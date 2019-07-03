import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurantList ;
  restaurantSearchValue = "";
  myfilters = "";
  checkBoxValue = [];
  filterSearchValue = "";
  restaurantNum = 0;
  restaurantService : RestaurantService;
  constructor(restaurantService : RestaurantService) {
    this.restaurantService = restaurantService;
    restaurantService.getRestaurants('تهران','میرداماد','').subscribe(
      data => { this.restaurantList = data; this.restaurantNum = data.allRestaurantsSize;},
      err => console.error(err),
      () => console.log('done loading foods ' + JSON.stringify(this.restaurantList))
    );
  }

  filters(event){
    this.myfilters = "";
    for(let i = 1 ; i < this.checkBoxValue.length+1 ; i++){
      if(this.checkBoxValue[i] == true){
        this.myfilters = this.myfilters + this.restaurantList.categories[i-1].name + ",";
      }
    }
    this.myfilters = this.myfilters.substring(0, this.myfilters.length-1);
    this.restaurantService.getRestaurants('تهران','میرداماد',this.myfilters).subscribe(
      data => { this.restaurantList = data},
      err => console.error(err),
      () => console.log('done loading foods ' + JSON.stringify(this.restaurantList))
    );
  }


  filterSearch(){
    this.restaurantList.categories.forEach(element => {
      console.log(element.name);
      if(document.getElementById(element.name) != null){
      if(!element.name.includes(this.filterSearchValue)){
        document.getElementById(element.name).style.display = "none";
      }else{
        document.getElementById(element.name).style.display = "flex";
      }
    }
    });
  }


  restaurantSearch(){
    this.restaurantList.allRestaurants.forEach(element => {
      if(document.getElementById(element.name) != null){
      if(!element.name.includes(this.restaurantSearchValue)){
        document.getElementById(element.name).style.display = "none";
      }else{
        document.getElementById(element.name).style.display = "flex";
      }
    }
    });
  }


  ngOnInit() {

  }

}
