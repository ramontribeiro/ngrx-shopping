import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  // styleUrls: ['./shopping.component.scss']
})

export class ShoppingComponent implements OnInit {
  user$ = this.loginService.getUser();

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }
}
