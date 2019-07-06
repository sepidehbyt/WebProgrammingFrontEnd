import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDataComponent } from './restaurant-data/restaurant-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: RestaurantListComponent,pathMatch:'prefix'},
  { path: 'data', component: RestaurantDataComponent,pathMatch:'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
