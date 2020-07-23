import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children-wrapper',
  templateUrl: './children-wrapper.component.html',
  styleUrls: ['./children-wrapper.component.scss']
})
export class ChildrenWrapperComponent implements OnInit {
  public counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  public setCounter(event: number): void {
    this.counter = event;
  }

}
