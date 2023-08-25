import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ShoppingListActions from '../../store/shopping-store/shopping-list.actions';
import { getShoppingListIsLoading, getShoppingItemId } from 'src/app/store/shopping-store/shopping-list.selectors';
import { IShoppingItem } from 'src/app/store/shopping-store/shopping-list.state';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.scss']
})
export class EditIngredientComponent implements OnInit {

  itemForm!: FormGroup;
  paramUrl = this.paramRouter.snapshot.paramMap.get('id') || '';
  loading$ = this.store.select(getShoppingListIsLoading)

  constructor(
    private formBuilder: FormBuilder,
    private paramRouter: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      id: this.paramUrl,
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    })

    const item$: Observable<IShoppingItem | undefined> = this.store.select(getShoppingItemId(this.paramUrl))

    item$.subscribe(itemEdit => {
      if ( itemEdit ) {
        this.itemForm.patchValue({
          id: itemEdit.id,
          name: itemEdit.name,
          quantity: itemEdit.quantity
        })
      }
    })
  }

  saveEdit(){
    // console.log(this.itemForm.value);
    this.store.dispatch(ShoppingListActions.updateItem({ item: this.itemForm.value }));
    this.loading$.subscribe({
      next: resp => {
        resp == false ? this.router.navigateByUrl(`list`) : undefined;
      }
    })
  }
}
