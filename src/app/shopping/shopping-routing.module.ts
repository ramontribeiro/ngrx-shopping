import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';
import { ShoppingListComponent } from './list-shopping/shopping-list.component';
import { ShoppingComponent } from './shopping.component';
import { CrudGuard } from '../services/crud.guard';
import { AuthGuard } from '../services/auth.guard';
import { HomeComponent } from './home/home.component';
import { UserDetalheResolver } from '../services/user-detalhe.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    // canActivate: [AuthGuard],
    resolve: { user : UserDetalheResolver },
    canActivateChild: [CrudGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { acesso: 'USER'}
      },
      {
        path: 'list',
        component: ShoppingListComponent,
        data: { acesso: 'USER'}
      },
      {
        path: 'new',
        component: AddIngredientComponent,
        data: { acesso: 'USER'}
      },
      {
        path: 'edit'+ '/:id',
        component: EditIngredientComponent,
        data: { acesso: 'ADMIN'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
