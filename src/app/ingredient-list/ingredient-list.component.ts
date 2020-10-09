import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient';
// La tabla de ingredientes sera el nombre, grupo (son 5), categoria de alimento, calorias
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  ingredient: Ingredient = {
    "name": "Papa",
    "category": "Tubérculos",
    "calorie": 80,
    "image": "assets/img/potato.jpeg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
