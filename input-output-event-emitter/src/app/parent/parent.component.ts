import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  private listState: string[];
  constructor() { 
    this.listState = [];
  }

  ngOnInit(): void {
  }

  public childActivated(childRef: any): void {
    try {
      childRef.previousListState(this.listState);
    } catch (error) {
      console.log('no such function');
    }
    if (childRef.pushToParent === undefined) {
      console.log('no binding from: ' + childRef);
      return
    }
    console.log(childRef);
    childRef.pushToParent.subscribe( (data: string[]) => {
      console.log('got from child: ' + data);
      this.listState = data;
    });
  }
}
