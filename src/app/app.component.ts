import { Component } from '@angular/core';
import { config } from './app.config';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DocumentaryLink } from 'ngx-documentary/ngx-documentary';

@Component({
  selector: 'app-root',
  template: '<ngx-documentary [config]="config"></ngx-documentary>',
})
export class AppComponent {
  config = config;
  
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(environment.versionsUrl).subscribe((data: DocumentaryLink[]) => {
      this.config.versions = data;
    });
  }
}
