import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { config } from './app.config';

@Component({
  selector: 'app-root',
  template: '<ngx-documentary [config]="config"></ngx-documentary>',
})
export class AppComponent {
  isNavbarCollapsed = true;

  config = config;

  constructor(public router: Router) {
  }
}
