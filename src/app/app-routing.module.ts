import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriumOneIMAXComponent } from './auditorium-one-imax/auditorium-one-imax.component';
import { AuditoriumStandardComponent } from './auditorium-standard/auditorium-standard.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { SeeAMovieComponent } from './see-a-movie/see-a-movie.component';
import { ShowtimeByMovieComponent } from './showtime-by-movie/showtime-by-movie.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'food-drink', component: FoodAndDrinkComponent},
  {path: 'showtime', component: ShowtimeComponent},
  {path: 'see-a-movie', component: SeeAMovieComponent},
  {path: 'movie-info/:id', component: MovieInfoComponent},
  {path: 'showtime-by-movie/:id', component: ShowtimeByMovieComponent},
  {path: 'ticket-type/:id', component: TicketTypeComponent},
  {path: 'auditorium-one-imax/:id/:starttime_id', component: AuditoriumOneIMAXComponent},
  {path: 'auditorium-standard/:id/:starttime_id', component: AuditoriumStandardComponent},
  {path: 'order-checkout/:id', component: OrderCheckoutComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
