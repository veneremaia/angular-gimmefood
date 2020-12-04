import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { FormsModule } from '@angular/forms';
import { GimmefoodAboutComponent } from './gimmefood-about/gimmefood-about.component';
import { GimmefoodIngredientsComponent } from './gimmefood-ingredients/gimmefood-ingredients.component';
import { IngredientsCartComponent } from './ingredients-cart/ingredients-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    GimmefoodAboutComponent,
    GimmefoodIngredientsComponent,
    IngredientsCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
