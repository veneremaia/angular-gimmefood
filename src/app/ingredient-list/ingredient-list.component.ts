import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient';
// La tabla de ingredientes sera el nombre, grupo (son 5), categoria de alimento, calorias
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  ingredients: Ingredient[] = [
    {
    "name": "Papa",
    "category": "Tubérculos",
    "calorie": 80,
    "sodium": 6,
    "image": "assets/img/potato.jpg"
    },
    {
    "name": "Pollo",
    "category": "Carnes y derivados",
    "calorie": 239,
    "sodium": 82,
    "image": "assets/img/chicken.jpg"
  },
  {
  "name": "Huevo",
  "category": "Carnes y derivados",
  "calorie": 155,
  "sodium": 124,
  "image": "assets/img/egg.jpg"
},
{
"name": "Queso",
"category": "Leche y derivados",
"calorie": 310,
"sodium": 621,
"image": "assets/img/cheese.jpg"
}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
