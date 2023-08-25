import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  token!: string

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  loginUser() {
    this.spinnerService.show()
    this.loginService.login(this.loginForm.value).subscribe({
      next: () =>{
        this.spinnerService.hide()
        // this.loginService.user().subscribe()
        this.router.navigate(['']);
      },
      error: erro => {
        console.error(erro);
        this.spinnerService.hide()
      }
    })

  }
}
