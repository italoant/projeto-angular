import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

import { authGuard } from './guards/aurh-guard';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent,
      canActivate:[authGuard]  
}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
