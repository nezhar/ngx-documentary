import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DocumentaryComponent } from './documentary.component';
import { DocumentaryRoutingModule } from './documentary.routing';


@NgModule({
  declarations: [
    DocumentaryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    DocumentaryRoutingModule,
  ],
  exports: [
    DocumentaryComponent
  ]
})
export class DocumentaryModule { }
