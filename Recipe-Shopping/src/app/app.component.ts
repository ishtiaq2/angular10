import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe-Shopping';

  public addToShoppingList(emittedValue: any): void{
    console.log(emittedValue);
  }

}
