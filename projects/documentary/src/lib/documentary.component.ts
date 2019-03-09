import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { DocumentaryConfig } from './documentary.config';


@Component({
  selector: 'ngx-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent implements OnInit, AfterContentInit {

  @Input() config: DocumentaryConfig;

  isNavbarCollapsed = true;

  constructor(public router: Router,
              private activeRoute: ActivatedRoute,
              private scrollToService: ScrollToService) {
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

  ngAfterContentInit() {
    const fragment: string = this.activeRoute.snapshot.fragment;

    if (fragment) {
      this.scrollToService.scrollTo({
        target: fragment
      });
    }
  }

}
