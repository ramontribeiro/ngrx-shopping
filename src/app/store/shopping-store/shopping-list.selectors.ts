import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IShoppingItem, IShoppingListState } from "./shopping-list.state";

const getShoppingListState = createFeatureSelector<IShoppingListState>('shoppingList');

export const getShoppingList = createSelector(
  getShoppingListState,
  (state) => state.entities
);

export const getShoppingListIsLoading = createSelector(
  getShoppingListState,
  (state) => state.isLoading
);

export const getShoppingItemId = (id: string) => createSelector(
  getShoppingList,
  (entities) => entities.find(item => item.id == id)
);
