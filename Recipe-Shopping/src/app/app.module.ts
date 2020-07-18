import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './RecipeBook/recipe.component';
import { ShoplistComponent } from './ShoppingList/shoplist.component'
import { NavigatorComponent } from './Navigater/navigator.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ShoplistComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
