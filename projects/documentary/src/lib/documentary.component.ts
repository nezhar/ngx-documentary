import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DocumentaryConfig } from './documentary.config';


@Component({
  selector: 'ngx-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent implements OnInit {

  @Input() config: DocumentaryConfig;

  isNavbarCollapsed = true;

  constructor(public router: Router) {
  }

  ngOnInit() {
    for (const route of this.config.routes) {
      this.router.config.push(route);
    }

    if (this.router.config.length) {
      this.router.config.push({
        path: '',
        redirectTo: this.config.routes[0].path,
        pathMatch: 'full'
      });
    }
  }

}
