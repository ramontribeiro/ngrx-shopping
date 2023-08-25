import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/services/login.service';
import { getShoppingListIsLoading } from 'src/app/store/shopping-store/shopping-list.selectors';
import { IShoppingListState } from 'src/app/store/shopping-store/shopping-list.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loading$ = this.store.select(getShoppingListIsLoading)
  user$ = this.loginService.getUser();

  constructor(
    private store: Store<{ shoppingList: IShoppingListState}>,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

}
