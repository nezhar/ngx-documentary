import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InstallComponent } from './pages/install/install.component';
import { ContributeComponent } from './pages/contribute/contribute.component';

export const config = {
  title: 'ngx-documentary',
  gitHubLink: 'https://github.com/',
  npmLink: 'https://www.npmjs.com/',
};

export const pages: Routes = [
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
    path: 'contribute',
    component: ContributeComponent,
    data: {
      name: 'Contribute'
    }
  },
];
