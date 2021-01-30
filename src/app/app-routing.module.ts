import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { HomeComponent } from './home/home.component';
import { ShowtimeComponent } from './showtime/showtime.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'food-drink', component: FoodAndDrinkComponent},
  {path: 'showtime', component: ShowtimeComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
