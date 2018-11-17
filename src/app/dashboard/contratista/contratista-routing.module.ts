import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratistaComponent } from './contratista/contratista.component';
import { AdminContratistaComponent } from './admin-contratista/admin-contratista.component';
import { AddContratistaComponent } from './add-contratista/add-contratista.component';
import { EditarContratistaComponent } from './editar-contratista/editar-contratista.component';
import { AuthGuardLoginService } from '../../core/auth/auth-guard-login.service';

const routes: Routes = [{
  path: '',
  component: ContratistaComponent,
  children: [
    {
      path: '',
      redirectTo: 'admin-contratista',
      pathMatch: 'full'
    },
    {
      path: 'admin-contratista',
      component: AdminContratistaComponent,
      data: {
        title: 'Administrar Contratistas'
      },
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'add-contratista',
      component: AddContratistaComponent,
      data: {
        title: 'Registrar Contratista'
      },
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'editar-contratista/:identificacion',
      component: EditarContratistaComponent,
      data: {
        title: 'Editar Contratista'
      },
      canActivate: [AuthGuardLoginService]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratistaRoutingModule { }
