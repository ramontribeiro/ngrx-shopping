import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShoppingListIsLoading } from './store/shopping-store/shopping-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ingredients?: any[] = [
  //   { name: 'Apple', amount: 5 },
  //   { name: 'Tomatoes', amount: 10 }
  // ]
  // loading$ = this.store.select(getShoppingListIsLoading)
  constructor(
    private store: Store
  ) {
    // this.store.dispatch(loadShoppingList())
  }


  // ingredients$ = this.store.pipe(select(getShoppingList))
}
