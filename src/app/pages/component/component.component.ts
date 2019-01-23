import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  code = {
    ts: `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  prop: string;

  constructor() { }

  ngOnInit() {
    this.pron = "My value";
  }

}`,
    html: `<app-my-component [myProp]='prop'></app-my-component>`
  };

  constructor() { }

  ngOnInit() {
  }

}
