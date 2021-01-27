import { Component, OnInit } from '@angular/core';
import { FoodDrinkService } from '../food-drink.service';
import { FoodDrink } from '../class/food-drink';

@Component({
  selector: 'app-food-and-drink',
  templateUrl: './food-and-drink.component.html',
  styleUrls: ['./food-and-drink.component.css']
})
export class FoodAndDrinkComponent implements OnInit {
  foodAndDrink: FoodDrink[];

  constructor(private foodDrinkService: FoodDrinkService) { }

  ngOnInit(): void {
    this.getFoodDrinkList();
  }

  private getFoodDrinkList(){
    this.foodDrinkService.getFoodDrinkList().subscribe(data => {
      this.foodAndDrink = data;
      console.log(this.foodAndDrink);
    }, error => console.log(error));
  }

}
