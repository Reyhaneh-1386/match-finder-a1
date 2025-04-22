import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { AccountService } from './services/user.service';
import { FootrrComponent } from './components/footrr/footrr.component';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatButtonModule,
    NavbarComponent, FootrrComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  /* service */
  AccountService = inject(AccountService);
}


