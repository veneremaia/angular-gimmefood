import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient-list/Ingredient';

const URL = "https://5fc7fbabf3c77600165d8f57.mockapi.io/ingredients"

@Injectable({
  providedIn: 'root'
})
export class IngredientsServiceService {


  constructor(private http : HttpClient) { }

  public getAll() : Observable<Ingredient[]>{
    // devuelve un observable
    return this.http.get<Ingredient[]>(URL)
  }
}
