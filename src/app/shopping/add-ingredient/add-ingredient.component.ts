import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../store/shopping-store/shopping-list.actions';
import { IShoppingItem } from 'src/app/store/shopping-store/shopping-list.state';
import { getShoppingListIsLoading } from 'src/app/store/shopping-store/shopping-list.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  itemForm!: FormGroup;
  loading$ = this.store.select(getShoppingListIsLoading)

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  addIngredient() {
    const newItem: IShoppingItem = {
      name: this.itemForm.get("name")?.value,
      quantity: this.itemForm.get("quantity")?.value,
    };

    this.store.dispatch(ShoppingListActions.addItem({ item: newItem }));
    this.loading$.subscribe({
      next: resp => {
        resp == false ? this.router.navigateByUrl(`list`) : undefined;
      }
    })
  }

}
