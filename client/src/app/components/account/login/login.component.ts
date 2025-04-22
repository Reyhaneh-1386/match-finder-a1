// import { Component } from '@angular/core';
import { Component, inject } from '@angular/core'
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { UserService } from '../../../services/user.service';
import { AccountService } from '../../../services/account.service';
import { Login } from '../../../models/login.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,MatFormFieldModule,
    MatInputModule,MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userService = inject(AccountService);
  fB = inject(FormBuilder)

  loginFg = this.fB.group({
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['']
  })

  get EmailCtrl(): FormControl {
    return this.loginFg.get('emailCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.loginFg.get('passwordCtrl') as FormControl;
  }

  login(): void {
    type NewType = Login;

    let userInput: NewType = {
      email: 'a1@a.com',
      password: '12345678'
    }

    this.userService.login(userInput).subscribe();
  }
}
