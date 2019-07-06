import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

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
  restaurantArea = "";
  router : Router;
  restaurantCity="";
  restaurantService : RestaurantService;
  constructor(restaurantService : RestaurantService,router : Router) {
    this.router = router;
    this.restaurantService = restaurantService;
    // console.log(window.location.pathname.split('?')[1].split('=')[0] + " " + window.location.pathname.split('&')[1].split('=')[0]);

    // console.log("/list?city=asd&area=asdb".split('?')[1].split('&')[0].split('=')[1] + " " +
    //  "/list?city=asd&area=asdb".split('&')[1].split('=')[1]);

    // /list?city=&area=
    restaurantService.getRestaurants('تهران','میرداماد','').subscribe(
      data => { this.restaurantList = data;
                this.restaurantNum = data.allRestaurantsSize;
                this.restaurantArea = data.area;
                this.restaurantCity = data.city;},
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

  resSelect(id){
    this.router.navigateByUrl('/data?id='+id);
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
