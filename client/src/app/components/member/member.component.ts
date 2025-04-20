import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Membre } from '../../models/memeber.model';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {
  userSevice = inject(UserService);
  member: Membre[] | undefined

  ngOnIit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userSevice.getAllMember().subscribe({
      next: (res) => {
        this.member = res;
      }
    });
  }
}
