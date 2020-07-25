import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
    public recipesList:  any[];
    public recipeTea: {};
    public checkedItem: string[];
    @Output()
    addToShoppingList: EventEmitter<any[]>;

    public recipeJuice = {};

    constructor() {
        this.recipesList = [];
        this.checkedItem = [];
        this.addToShoppingList = new EventEmitter<any[]>();

        this.recipeTea = { Tea: {
            items: ['Water', 'Black Tea', 'Sugar', 'Milk'],
            recipe: 'steps of making tea',
            expanded: false
            }
        };
        this.recipeJuice = { Juice: {
            items: ['Water', 'Milk', 'Apple', 'Sugar'],
            recipe: 'Steps of making Apple Juice',
            expanded: false
            }
        };

        this.recipesList.push(this.recipeTea);
        this.recipesList.push(this.recipeJuice);
    }
    ngOnInit () {}

    public getKey(obj: any): any {
        return Object.keys(obj)[0]
    }

    public checkItem(event: any, item: string): void {
        console.log(event.target.checked + ', ' + item);
        if (event.target.checked) {
            this.checkedItem.push(item); 
        } else {
            this.checkedItem.splice(this.checkedItem.indexOf(item), 1);
        }
    }

    public addToCart(): void {
        let items = [];
        for (let item of this.checkedItem) {
            items.push(this.recipesList.find(itm => this.getKey(itm) === item));
        }
        this.addToShoppingList.emit(items);
    }
}   