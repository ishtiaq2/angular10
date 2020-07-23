import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  public list: string[];
  constructor() { 
    this.list = [];
  }

  ngOnInit(): void {
  }

  public previousListState(list: string[]): void {
    this.list = list;
  }
}
