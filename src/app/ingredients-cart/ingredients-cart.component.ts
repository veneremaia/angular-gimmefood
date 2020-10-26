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
  cant_cal : number = 0;
  cartList$ : Observable<Ingredient[]>;
  constructor(private cart: IngredientCartService) {
    this.cartList$ = this.cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
