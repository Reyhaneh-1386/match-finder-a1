import { Component, inject } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { UserService } from '../../services/user.service';
import { AccountService } from '../../services/account.service';
import { Membre } from '../../models/memeber.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    // RouterLink,
    MatCardModule
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {
  accountSevice = inject(AccountService);
  members: Membre[] | undefined

  ngOnIit(): void {
    this.getAll();
  }

  getAll(): void {
    this.accountSevice.getAllMember().subscribe({
      next: (res) => {
        this.members = res;
      }
    });
  }
}
