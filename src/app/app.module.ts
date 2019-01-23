import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrismModule } from '@ngx-prism/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import { HomeComponent } from './pages/home/home.component';
import { InstallComponent } from './pages/install/install.component';
import { ContributeComponent } from './pages/contribute/contribute.component';
import { ComponentComponent } from './pages/component/component.component';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstallComponent,
    ContributeComponent,
    ComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PrismModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
