import { Component, OnInit } from '@angular/core';
import { HomeSearchService } from '../home-search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})

export class HomeSearchComponent implements OnInit {

  public areas = [{"area" : "جستجوی خودکار منطقه ی شما"}];
  cityChoose = "";
  areaChoose = "";

  constructor(private homeSeacrhService: HomeSearchService) {}

  ngOnInit() {}

  popUpArea() {
    console.log(this.cityChoose);
    this.getArea(this.cityChoose);
  }

  getArea(city) {
     this.homeSeacrhService.getArea(city).subscribe(
          data => { this.areas = data},
          err => console.error(err),
          () => console.log('done loading foods ' + this.areas)
        );
        document.getElementById("areaChoose").focus();
  }

  submitSeacrh() {
    console.log(this.cityChoose+"   "+this.areaChoose);
  }

}
