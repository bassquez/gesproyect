import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuenteFinanciacionComponent } from './fuente-financiacion/fuente-financiacion.component';
import { AdminFuenteFinanciacionComponent } from './admin-fuente-financiacion/admin-fuente-financiacion.component';
import { AddFuenteFinanciacionComponent } from './add-fuente-financiacion/add-fuente-financiacion.component';
import { AuthGuardLoginService } from '../../core/auth/auth-guard-login.service';

const routes: Routes = [{
  path: '',
  component: FuenteFinanciacionComponent,
  children: [
    {
      path: '',
      redirectTo: 'admin-fuente-financiacion',
      pathMatch: 'full'
    },
    {
      path: 'admin-fuente-financiacion',
      component: AdminFuenteFinanciacionComponent,
      data: {
        title: 'Administrar Fuente de Financiacion'
      },
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'add-fuente-financiacion',
      component: AddFuenteFinanciacionComponent,
      data: {
        title: 'Registrar Fuente de Financiacion'
      },
      canActivate: [AuthGuardLoginService]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuenteFinanciacionRoutingModule { }
