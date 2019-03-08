import { AboutComponent } from './pages/about/about.component';
import { InstallComponent } from './pages/install/install.component';
import { SampleComponent } from './pages/sample/sample.component';
import { DocumentaryConfig } from 'ngx-documentary';


export const config: DocumentaryConfig = {
  title: 'ngx-documentary',
  links: [
    {
      'href': 'https://github.com/nezhar/ngx-documentary',
      'name': 'Github',
    },
    {
      'href': 'https://www.npmjs.com/package/ngx-documentary',
      'name': 'NPM',
    },
  ],
  routes: [
    {
      path: 'about',
      component: AboutComponent,
      data: {
        name: 'About'
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
      path: 'sample',
      component: SampleComponent,
      data: {
        name: 'Sample docs',
        fragments: [
          {
            name: 'Component 1',
            href: 'component1',
          },
          {
            name: 'Component 2',
            href: 'component2',
          },
          {
            name: 'Component 3',
            href: 'component3',
          },
        ]
      }
    }
  ],
  currentVersion: '1.0.0',
  versions: []
};
