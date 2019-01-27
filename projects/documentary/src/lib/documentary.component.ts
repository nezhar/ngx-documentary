import { Component, OnInit, Input } from '@angular/core';
import { Routes, Router } from '@angular/router';
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
  }

}
