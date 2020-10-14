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

  img_protein : string = "assets/img/protein.png";

  
  ingredients: Ingredient[] = [
    {
    "name": "Papa",
    "category": "Tubérculos",
    "calorie": 80,
    "sodium": 6,
    "protein": 7,
    "carbohydrates": 20.45,
    "vegan": true,
    "image": "assets/img/potato.png"
    },
    {
    "name": "Pollo",
    "category": "Carnes y derivados",
    "calorie": 239,
    "sodium": 82,
    "protein": 27,
    "carbohydrates": 0,
    "vegan": false,
    "image": "assets/img/chicken.png"
  },
  {
  "name": "Huevo",
  "category": "Carnes y derivados",
  "calorie": 155,
  "sodium": 124,
  "protein": 11,
  "carbohydrates": 0.6,
  "vegan": false,
  "image": "assets/img/egg.png"
},
{
"name": "Queso",
"category": "Leche y derivados",
"calorie": 310,
"sodium": 621,
"protein": 20,
"carbohydrates": 1.67,
"vegan": false,
"image": "assets/img/cheese.png"
},
{
  "name": "Maíz",
  "category": "Cereal",
  "calorie": 111,
  "sodium": 35,
  "protein": 9.42,
  "carbohydrates": 18.7,
  "vegan": true,
  "image": "assets/img/corn.png"
  },
  {
    "name": "Zanahoria",
    "category": "Verduras y hortalizas",
    "calorie": 41,
    "sodium": 61,
    "protein": 0.9,
    "carbohydrates": 9.58,
    "vegan": true,
    "image": "assets/img/carrot.png"
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
