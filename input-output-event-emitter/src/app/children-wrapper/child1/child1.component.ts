import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childw1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class ChildW1Component implements OnInit {

  public counter: number;
  @Output()
  emitCounter: EventEmitter<number>;
  constructor() { 
    this.counter = 0;
    this.emitCounter = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public setCounter(): void {
    this.counter = this.counter + 1;
    this.emitCounter.emit(this.counter);
  }
}
