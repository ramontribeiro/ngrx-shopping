
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import * as ShoppingListActions from './shopping-list.actions';
import { Injectable } from "@angular/core";
import { IShoppingListState } from "./shopping-list.state";
import { Store } from "@ngrx/store";
import { ShoppingListService } from "src/app/services/shopping-list.service";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListEffects {

  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: IShoppingListState}>
  ) {}

  // loadShoppingList$ = createEffect(()=>{
  //   return this.actions$.pipe(
  //     ofType(ShoppingListActions.loadShoppingList),
  //     switchMap(() =>
  //       this.shoppingListService.getList().pipe(
  //         tap(x=>console.log(x)),
  //         map(resp =>
  //           ShoppingListActions.loadShoppingListSucess({entities: resp.body})
  //         ),
  //         catchError((error)=>of(ShoppingListActions.loadShoppingListError({error})))
  //       )
  //     )
  //   )
  // })

  loadShoppingList$ = createEffect(
    () => this.actions$.pipe(
      ofType(ShoppingListActions.loadShoppingList),
      withLatestFrom(
        this.store.select('shoppingList').pipe(
          map(shoppingList => shoppingList.entities)
        )
      ),
      // tap(([a,b]) => {
      //   console.log(a)
      //   console.log(b)
      // }),
      switchMap(([_, list]) => {
        if(list.length === 0) {
          return this.shoppingListService.getList()
          .pipe(
            tap(list => {
              this.store.dispatch(ShoppingListActions.setShoppingItems({entities: list}))
            }),
            map(() => ShoppingListActions.loadShoppingListSucess()),
            catchError((error) => of(ShoppingListActions.loadShoppingListError({error})))
          )
        }
        return of(ShoppingListActions.loadShoppingListSucess())
      })
    )
  )

  // loadShoppingItem$ = createEffect(()=>{
  //   return this.actions$.pipe(
  //     ofType(ShoppingListActions.loadShoppingItem),
  //     switchMap((payload) =>
  //       this.shoppingListService.getItem(payload.item.id).pipe(
  //         tap(x=>console.log(x)),
  //         map(resp => ShoppingListActions.loadShoppingItemSucess({item: resp.body})
  //         ),
  //         catchError((error)=>of(ShoppingListActions.loadShoppingListError({error})))
  //       )
  //     )
  //   )
  // })

  addItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.addItem),
      switchMap(payload =>
        this.shoppingListService.postItem(payload.item).pipe(
          // tap(x=>console.log(x)),
          map((data: any) =>
            ShoppingListActions.addItemSuccess({item: data})
          ),
          catchError(error => of(ShoppingListActions.addItemError({error})))
        )
      )
    )
  })

  editItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.updateItem),
      switchMap(payload =>
        this.shoppingListService.putItem(payload.item).pipe(
          // tap(x=>console.log(x)),
          map((data: any) => ShoppingListActions.updateItemSuccess({item: data})),
          catchError(error => of(ShoppingListActions.updateItemError({error})))
        )
      )
    )
  })

  removeItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.removeItem),
      // tap(x=>console.log(x)),
      switchMap(payload =>
        this.shoppingListService.deleteItem(payload.id).pipe(
          map(_data => ShoppingListActions.removeItemSuccess({ id: payload.id })),
          catchError(error => of(ShoppingListActions.removeItemError({error})))
        )
      )
    )
  })
}
