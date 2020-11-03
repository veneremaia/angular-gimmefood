import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IngredientCartService } from '../ingredient-cart.service';
import { Ingredient } from '../ingredient-list/Ingredient';

@Component({
  selector: 'app-ingredients-cart',
  templateUrl: './ingredients-cart.component.html',
  styleUrls: ['./ingredients-cart.component.scss']
})
export class IngredientsCartComponent implements OnInit {

  cartList$ : Observable<Ingredient[]>;
  cantCalories : number = 0; 
  constructor(private cart: IngredientCartService) {
    this.cartList$ = this.cart.cartList.asObservable();
    this.cart.cartList.forEach(element => {
      this.cantCalories =0;
      element.forEach(ingredient =>
        this.cantCalories+=ingredient.calorie*ingredient.quantity)
    });
   }

  ngOnInit(): void {
  }


}
