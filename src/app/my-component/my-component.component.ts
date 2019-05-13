import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
@Output('clicked') clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
