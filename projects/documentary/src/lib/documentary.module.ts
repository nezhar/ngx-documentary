import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { DocumentaryComponent } from './documentary.component';
import { DocumentaryRoutingModule } from './documentary.routing';


@NgModule({
  declarations: [
    DocumentaryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ScrollToModule.forRoot(),
    DocumentaryRoutingModule,
  ],
  exports: [
    DocumentaryComponent
  ]
})
export class DocumentaryModule { }
