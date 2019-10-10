import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './app.config';
import { DocumentaryLink } from 'ngx-documentary/ngx-documentary';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: '<ngx-documentary [config]="config"></ngx-documentary>',
})
export class AppComponent implements OnInit {
  config = config;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(environment.versionsUrl).subscribe((data: DocumentaryLink[]) => {
      this.config.versions = data;
    });
  }
}
