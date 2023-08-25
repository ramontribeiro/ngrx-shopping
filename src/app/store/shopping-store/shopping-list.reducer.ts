import { createReducer, on } from "@ngrx/store";
import { IShoppingListState } from "./shopping-list.state";
// import { loadShoppingList, loadShoppingListError, loadShoppingListSucess } from "./shopping-list.actions";
import * as ShoppingActions from "./shopping-list.actions";

export const initialState: IShoppingListState = {
  entities: [
    // {
    //   id: 1,
    //   name: 'Milk',
    //   quantity: 1
    // },
    // {
    //   id: 2,
    //   name: 'Bread',
    //   quantity: 2
    // },
  ],
  isLoading: false
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingActions.loadShoppingList, (state) => ({
    ...state,
    isLoading: true
  })),
  // on(ShoppingActions.loadShoppingListSucess, (state, { entities }) => ({
  //   ...state,
  //   entities,
  //   isLoading: false
  // })),
  on(ShoppingActions.loadShoppingListSucess, (state) => {

    return {
    ...state,
    isLoading: false
  }}),
  on(ShoppingActions.loadShoppingListError, (state) => ({
    ...state,
    isLoading: false
  })),
  on(ShoppingActions.loadShoppingItem, (state) => ({
    ...state,
    isLoading: true
  })),
  on(ShoppingActions.loadShoppingItemSucess, (state, { item }) => ({
    ...state,
    entities: state.entities.filter(a => a.id === item.id),
    isLoading: false
  })),
  on(ShoppingActions.loadShoppingItemError, (state) => ({
    ...state,
    isLoading: false
  })),
  on(ShoppingActions.addItem, (state, { item }) => ({
    ...state,
    isLoading: true
  })),
  on(ShoppingActions.addItemSuccess, (state, { item }) => ({
    ...state,
    isLoading: false,
    entities: [...state.entities, item]
  })),
  on(ShoppingActions.addItemError, (state) => ({
    ...state,
    isLoading: false
  })),
  on(ShoppingActions.removeItem, (state, { id }) => ({
    ...state,
    isLoading: true
  })),
  on(ShoppingActions.removeItemSuccess, (state, { id }) => ({
    ...state,
    isLoading: false,
    entities: state.entities.filter(a => a.id !== id)
  })),
  on(ShoppingActions.removeItemError, (state) => ({
    ...state,
    isLoading: false
  })),
  on(ShoppingActions.updateItem, (state, { item }) => ({
    ...state,
    isLoading: true
  })),
  on(ShoppingActions.updateItemSuccess, (state, { item }) => {
    let newState = state.entities.filter(a => a.id !== item.id)

    return {
      entities: [...newState, item],
      isLoading: false
    }
  }),
  on(ShoppingActions.updateItemError, (state) => ({
    ...state,
    isLoading: false
  })),

  on(ShoppingActions.setShoppingItems, (state, {entities}) => ({
    ...state,
    entities,
    // isLoading: true
  })),
  on(ShoppingActions.setShoppingItemsSuccess, (state, {entities}) => ({
    ...state,
    entities,
    isLoading: false
  })),
  on(ShoppingActions.setShoppingItemsError, (state) => ({
    ...state,
    isLoading: false
  }))
)
