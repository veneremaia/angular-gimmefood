import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './ingredient-list/Ingredient';

@Injectable({
  providedIn: 'root'
})

export class IngredientCartService {

  private _cartList : Ingredient[] = [];
  // Observable
 cartList : BehaviorSubject<Ingredient[]> = new BehaviorSubject([]);

 constructor() { }

  addToCart(ingredient: Ingredient) {
    let item : Ingredient = this._cartList.find(i=> i.name==ingredient.name);
    if(!item)
    // clona el objeto {...}
      this._cartList.push({...ingredient});
    else
      //se esta modificando el item del cartList
      item.quantity+=ingredient.quantity;

    console.log(this._cartList);
    // Actualizamos la variable observada
    this.cartList.next(this._cartList);
  }

}
