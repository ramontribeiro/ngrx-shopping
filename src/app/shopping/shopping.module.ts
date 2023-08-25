import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AddIngredientComponent } from "./add-ingredient/add-ingredient.component";
import { EditIngredientComponent } from "./edit-ingredient/edit-ingredient.component";
import { ShoppingListComponent } from "./list-shopping/shopping-list.component";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { ShoppingComponent } from "./shopping.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { shoppingListReducer } from "../store/shopping-store/shopping-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ShoppingListEffects } from "../store/shopping-store/shopping-list.effects";
import { NavbarModule } from "../components/navbar/navbar.module";
import { CrudGuard } from "../services/crud.guard";
import { AuthGuard } from "../services/auth.guard";
import { UserDetalheResolver } from "../services/user-detalhe.resolver";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    AddIngredientComponent,
    EditIngredientComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule,
    CommonModule,
    ShoppingRoutingModule,
    RouterModule,
    NavbarModule
  ],
  providers: [
    AuthGuard,
    UserDetalheResolver,
    CrudGuard]
})
export class ShoppingModule { }
