import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoplistComponent } from './ShoppingList/shoplist.component';
import { RecipeComponent } from './RecipeBook/recipe.component';


const routes: Routes = [
  { path: 'shoplist', component: ShoplistComponent },
  { path: 'recipe', component: RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
