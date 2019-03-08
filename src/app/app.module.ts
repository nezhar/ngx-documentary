import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrismModule } from '@ngx-prism/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { InstallComponent } from './pages/install/install.component';
import { SampleComponent } from './pages/sample/sample.component';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

import { DocumentaryModule } from 'ngx-documentary';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    PrismModule,
    DocumentaryModule,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    InstallComponent,
    SampleComponent,
  ],
  entryComponents: [
    AboutComponent,
    InstallComponent,
    SampleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
