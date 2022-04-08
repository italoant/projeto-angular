import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/guards/aurh-guard';


import { PerfilComponent } from './perfil.component';


const appRoutesPerfil: Routes = [
  { path: 'perfil', component: PerfilComponent,
      canActivate: [authGuard]
}
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(appRoutesPerfil);


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutesPerfil)
  ],
  exports: [
    RouterModule
  ]
})
export class PerfilRoutingModule { }


