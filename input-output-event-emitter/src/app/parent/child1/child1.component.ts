import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  public list: string[];
  @Output() 
  pushToParent: EventEmitter<string[]>;

  constructor() { 
    this.list = [];
    this.pushToParent = new EventEmitter<string[]>();
  }

  ngOnInit(): void {
  }

  public addToList(value: string): void {
    this.list.push(value);
    this.pushToParent.emit(this.list);
  }

  public previousListState(list: string[]): void {
    this.list = list;
  }
}
