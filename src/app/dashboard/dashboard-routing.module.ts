import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RootComponent } from './root/root.component';
import { AuthService } from '../core/auth/auth.service';
import { AuthGuardLoginService } from '../core/auth/auth-guard-login.service';
import { LoginComponent } from '../static';

const routes: Routes = [{
  path: '',
  component: RootComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: DashboardComponent,
      data: {
        title: 'Tablero de Trabajo'
      },
      canActivate: [AuthGuardLoginService]
    } ,
    {
      path: 'proyecto',
      loadChildren: 'app/dashboard/proyecto/proyecto.module#ProyectoModule',
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'interventoria',
      loadChildren: 'app/dashboard/interventoria/interventoria.module#InterventoriaModule',
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'contratista',
      loadChildren: 'app/dashboard/contratista/contratista.module#ContratistaModule',
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'fuente-financiacion',
      loadChildren: 'app/dashboard/fuente-financiacion/fuente-financiacion.module#FuenteFinanciacionModule',
      canActivate: [AuthGuardLoginService]
    },
    {
      path: 'factura',
      loadChildren: 'app/dashboard/factura/factura.module#FacturaModule',
      canActivate: [AuthGuardLoginService]
    },
    { path: '**', redirectTo: '/login' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
