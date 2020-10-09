import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient';
// La tabla de ingredientes sera el nombre, grupo (son 5), categoria de alimento, calorias
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  img_vegan : string = "assets/img/vegan.png";
  
  ingredients: Ingredient[] = [
    {
    "name": "Papa",
    "category": "Tubérculos",
    "calorie": 80,
    "sodium": 6,
    "vegan": true,
    "image": "assets/img/patata.png"
    },
    {
    "name": "Pollo",
    "category": "Carnes y derivados",
    "calorie": 239,
    "sodium": 82,
    "vegan": false,
    "image": "assets/img/chicken.png"
  },
  {
  "name": "Huevo",
  "category": "Carnes y derivados",
  "calorie": 155,
  "sodium": 124,
  "vegan": false,
  "image": "assets/img/egg.png"
},
{
"name": "Queso",
"category": "Leche y derivados",
"calorie": 310,
"sodium": 621,
"vegan": false,
"image": "assets/img/cheese.png"
}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
