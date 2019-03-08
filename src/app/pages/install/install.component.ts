import { Component } from '@angular/core';

@Component({
  templateUrl: './install.component.html',
})
export class InstallComponent {

  module = `import { DocumentaryModule } from 'ngx-documentary';

@NgModule({
  imports: [
    ...
    DocumentaryModule,
  ],
  ...
})
export class AppModule { }
`;

  component = `import { Component } from '@angular/core';
import { config } from './app.config';

@Component({
  selector: 'app-root',
  template: '<ngx-documentary [config]="config"></ngx-documentary>',
})
export class AppComponent {
  config = config;
}
`;

  config = `import { DocumentaryConfig } from 'ngx-documentary';

export const config: DocumentaryConfig = {
  title: 'ngx-documentary',
  links: [],
  routes: [],
  currentVersion: '1.0.0',
  versions: []
};
`;

}
