import { Component, OnInit } from '@angular/core';
import { HomeSearchService } from '../home-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})

export class HomeSearchComponent implements OnInit {

  public areas = [{"area" : "جستجوی خودکار منطقه ی شما"}];
  cityChoose = "";
  areaChoose = "";
  router : Router;

  constructor(private homeSeacrhService: HomeSearchService,router : Router) {
    this.router = router;
  }

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
    // console.log('/list?city='+this.cityChoose+'&area='+this.areaChoose);
    this.router.navigateByUrl('/list?city='+this.cityChoose+'&area='+this.areaChoose);
    // this.props.history.push('/list');
  }

}
