import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule),
    canActivate:[AuthGuard],
    data: { acesso: 'USER'}
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: "shopping",
  //   component: ShoppingComponent,
  //   children: [{
  //     loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule),
  //     canActivate:[AuthGuard]
  //   }]
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
