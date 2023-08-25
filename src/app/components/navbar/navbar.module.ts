import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar.component";
import { RouterModule } from "@angular/router";
import { ShoppingRoutingModule } from "src/app/shopping/shopping-routing.module";

@NgModule(
  {
    declarations: [NavbarComponent],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ShoppingRoutingModule
    ],
    exports: [NavbarComponent]
  }
)

export class NavbarModule { }
