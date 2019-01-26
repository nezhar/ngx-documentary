import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pages, config } from '../app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavbarCollapsed = true;

  title = config.title;
  gitHubLink = config.gitHubLink;
  npmLink = config.npmLink;

  pages = pages;

  constructor(public router: Router) {
  }
}
