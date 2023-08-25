import { createAction, props } from "@ngrx/store";
import { IShoppingItem } from "./shopping-list.state";
import { Update } from "@ngrx/entity";

//LOAD
export const loadShoppingList = createAction(
  '[Shopping List] Load Shopping List'
);

// export const loadShoppingListSucess = createAction(
//   '[Shopping List] Load Shopping List Sucess',
//   props<{ entities: IShoppingItem[] }>()
// );
export const loadShoppingListSucess = createAction(
  '[Shopping List] Load Shopping List Sucess'
);

export const loadShoppingListError = createAction(
  '[Shopping List] Load Shopping List Error',
  props<{ error: any }>()
);

//LOAD ITEM
export const loadShoppingItem = createAction(
  '[Shopping Item] Load Shopping Item',
  props<{ item: IShoppingItem }>()
);

export const loadShoppingItemSucess = createAction(
  '[Shopping Item] Load Shopping Item Sucess',
  props<{ item: IShoppingItem }>()
);

export const loadShoppingItemError = createAction(
  '[Shopping Item] Load Shopping Item Error',
  props<{ error: any }>()
);

//CREATE
export const addItem = createAction(
  '[Shopping Add] Add Item',
  props<{ item: IShoppingItem }>()
);
export const addItemSuccess = createAction(
  '[Shopping Add] Add Item Success',
  props<{ item: IShoppingItem }>()
);
export const addItemError = createAction(
  '[Shopping Add] Add Item Error',
  props<{ error: any }>()
);

//DELETE
export const removeItem = createAction(
  '[Shopping Remove] Remove Item',
  props<{ id: any }>()
)
export const removeItemSuccess = createAction(
  '[Shopping Remove] Remove Item Success',
  props<{ id: any }>()
)
export const removeItemError = createAction(
  '[Shopping Remove] Remove Item Error',
  props<{ error: any }>()
)

//UPDATE
export const updateItem = createAction(
  '[Shopping Update] Update Item',
  props<{ item: IShoppingItem }>()
)
export const updateItemSuccess = createAction(
  '[Shopping Update] Update Item Success',
  props<{ item: IShoppingItem }>()
)
export const updateItemError = createAction(
  '[Shopping Update] Update Item Error',
  props<{ error: any }>()
)


//-------------novos---------------------
export const setShoppingItems = createAction(
  '[Shopping Set] Set Items',
  props<{ entities: IShoppingItem[] }>()
)
export const setShoppingItemsSuccess = createAction(
  '[Shopping Set] Set Items Success',
  props<{ entities: IShoppingItem[] }>()
)

export const setShoppingItemsError = createAction(
  '[Shopping Set] Set Items Error',
  props<{ error: any }>()
)


