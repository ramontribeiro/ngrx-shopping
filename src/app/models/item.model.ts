import { Injectable } from "@angular/core";
import { Adapter } from "./adapters/adapter";

export class Item {
  constructor(
    public name: string,
    public quantity: number,
    public id?: string,
  ){}
}

export class ItemRequest {
  constructor(
    public nome: string,
    public quantidade: number,
    public id?: string,
  ){}
}

@Injectable({
  providedIn: "root",
})
export class ItemAdapterResponse implements Adapter<Item> {
  adapt(item: ItemRequest): Item {
    return new Item(item.nome, item.quantidade, item.id);
  }
}

@Injectable({
  providedIn: "root",
})
export class ItemAdapterRequest implements Adapter<ItemRequest> {
  adapt(item: Item): ItemRequest {
    return new ItemRequest(item.name, item.quantity, item.id);
  }
}
