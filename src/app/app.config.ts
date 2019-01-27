import { HomeComponent } from './pages/home/home.component';
import { InstallComponent } from './pages/install/install.component';
import { ContributeComponent } from './pages/contribute/contribute.component';
import { ComponentComponent } from './pages/component/component.component';
import { DocumentaryConfig } from 'ngx-documentary';


export const config: DocumentaryConfig = {
  title: 'ngx-documentary',
  links: [
    {
      'href': 'https://github.com/',
      'name': 'Github',
    },
    {
      'href': 'https://www.npmjs.com/',
      'name': 'NPM',
    },
  ],
  routes: [
    {
      path: 'home',
      component: HomeComponent,
      data: {
        name: 'Home'
      }
    },
    {
      path: 'install',
      component: InstallComponent,
      data: {
        name: 'Install'
      }
    },
    {
      path: 'component',
      component: ComponentComponent,
      data: {
        name: 'Components',
        fragments: [
          {
            name: 'Component 1',
            href: 'component1',
          },
          {
            name: 'Component 2',
            href: 'component2',
          },
        ]
      }
    },
    {
      path: 'contribute',
      component: ContributeComponent,
      data: {
        name: 'Contribute'
      }
    },
  ]
};
