import { Component } from '@angular/core';
import { config } from './app.config';

@Component({
  selector: 'app-root',
  template: '<ngx-documentary [config]="config"></ngx-documentary>',
})
export class AppComponent {
  config = config;
}
