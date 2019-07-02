import { Component, OnInit } from '@angular/core';
import { HomeSearchService } from '../home-search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  private city: string;

  constructor(private homeSeacrhService: HomeSearchService) {}

  ngOnInit() {
    this.homeSeacrhService.getArea("tehran");
    console.log(this.homeSeacrhService.getArea("tehran"));
  }

}
