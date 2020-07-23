import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childw2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class ChildW2Component implements OnInit {

  @Input()
  counter: number;
  constructor() { 
    this.counter = 0;
  }

  ngOnInit(): void {
  }
  
}
