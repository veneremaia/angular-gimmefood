import { Component, OnInit } from '@angular/core';
import { IngredientCartService } from '../ingredient-cart.service';
import { IngredientsServiceService } from '../ingredients-service.service';
import { Ingredient } from './Ingredient';
// La tabla de ingredientes sera el nombre, grupo (son 5), categoria de alimento, calorias
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  img_vegan : string = "assets/img/vegan.png";

  img_protein : string = "assets/img/protein.png";

  
  ingredients: Ingredient[] = [];

  constructor(private cart : IngredientCartService, private service : IngredientsServiceService) { 
    console.log(this.ingredients);
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(food =>this.ingredients =food);
    console.log(this.ingredients);
  }

 maxReached(m: String) : void{
   console.log(m);
 }

 addToCart(ingredient : Ingredient) : void {
   if(ingredient.quantity!=0){
    this.cart.addToCart(ingredient);
    ingredient.stock-=ingredient.quantity;
    ingredient.quantity = 0;
   }
 }
}
