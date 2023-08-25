
import * as ShoppingListActions from '../../store/shopping-store/shopping-list.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getShoppingList, getShoppingListIsLoading } from 'src/app/store/shopping-store/shopping-list.selectors';
import { IShoppingListState, IShoppingItem } from 'src/app/store/shopping-store/shopping-list.state';
import { CrudGuard } from 'src/app/services/crud.guard';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  list$ = this.store.select(getShoppingList)
  loading$ = this.store.select(getShoppingListIsLoading)
  user$ = this.loginService.getUser();

  constructor(
    private store: Store<{ shoppingList: IShoppingListState}>,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ShoppingListActions.loadShoppingList())
    // this.loginService.user()
  }

  removeItem(id: any){
    this.store.dispatch(ShoppingListActions.removeItem({id}));
  }

  editarItem(item: IShoppingItem){
    this.router.navigateByUrl(`edit/${item.id}`);
  }
}
