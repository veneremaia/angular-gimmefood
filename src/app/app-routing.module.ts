import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GimmefoodAboutComponent } from './gimmefood-about/gimmefood-about.component';
import { GimmefoodIngredientsComponent } from './gimmefood-ingredients/gimmefood-ingredients.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingredients',
    pathMatch:'full'
  },
  {
    path:'ingredients',
    component: GimmefoodIngredientsComponent
  },
  {
    path:'about',
    component: GimmefoodAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
