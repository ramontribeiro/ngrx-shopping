import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "../app-routing.module";
import { NavbarModule } from "../components/navbar/navbar.module";

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    // NgxSpinnerModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    // FormsModule,
    // NavbarModule
  ],
  exports: [
    HeaderComponent,
    // CommonModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    // NgxSpinnerModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    // FormsModule,
    // NavbarModule
  ]
})
export class SharedModule { }
