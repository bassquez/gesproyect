import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { ImprimirComponent } from './imprimir/imprimir.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent, data: { title: 'Inicio' } },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'Features' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'imprimir/:id',
    component: ImprimirComponent,
    data: { title: 'Imprimir' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
