import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { SeeAMovieComponent } from './see-a-movie/see-a-movie.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodAndDrinkComponent,
    ShowtimeComponent,
    SeeAMovieComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
