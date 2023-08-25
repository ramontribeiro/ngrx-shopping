import { Item } from "src/app/models/item.model";


export interface IShoppingListState {
  entities: IShoppingItem[];
  isLoading: boolean;
}

export interface IShoppingItem extends Item{
}
