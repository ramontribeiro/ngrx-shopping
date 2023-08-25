import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, tap } from 'rxjs';
import { ItemAdapterResponse, Item, ItemAdapterRequest } from '../models/item.model';
import { environment } from 'src/environments/environment';
import { IShoppingItem } from '../store/shopping-store/shopping-list.state';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private api = environment.api;
  private baseUrl = `${this.api}/shopping-list`;

  constructor(
    private http: HttpClient,
    private itemAdapterResponse: ItemAdapterResponse,
    private itemAdapterRequest: ItemAdapterRequest,
  ) {  }

  getList(): Observable<Item[]> {
    return this.http.get(this.baseUrl, {
      observe: 'response',
      // headers: this.addFormDataHeader()
    }).pipe(
      delay(400),
      tap(x=>console.log(x)),
      map((data: any) =>
        data.body.map(
          (item: any) => this.itemAdapterResponse.adapt(item)))
    )
  }

  getItem(item: IShoppingItem): Observable<any> {
    return this.http.get(`${this.baseUrl}/${item.id}`, {
      observe: 'response',
      // headers: this.addFormDataHeader()
    }).pipe(
      delay(400),
      // tap(x=>console.log(x)),
      map((data: any) => this.itemAdapterResponse.adapt(data))
    );
  }

  postItem(item: IShoppingItem): Observable<any> {
    return this.http.post(this.baseUrl, this.itemAdapterRequest.adapt(item)).pipe(
      delay(400),
      // tap(x=>console.log(x)),
      map((data: any) => this.itemAdapterResponse.adapt(data))
    );
  }

  putItem(item: IShoppingItem) {
    // this.spinnerService.show()
    return this.http.put(this.baseUrl, this.itemAdapterRequest.adapt(item)).pipe(
      delay(1000),
      // tap(x=>console.log(x)),
      map((data: any) => this.itemAdapterResponse.adapt(data))
    );
  }

  deleteItem(id: string) {
    // this.spinnerService.show()
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      delay(1000)
      );
  }
}
