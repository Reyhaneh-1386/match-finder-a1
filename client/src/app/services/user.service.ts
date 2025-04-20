import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user.model';
import { LoggedIn } from '../models/looged-in.model';
import { Login } from '../models/login.model';
import { Membre } from '../models/memeber.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  register(user: AppUser): Observable<LoggedIn> {
   return this.http.post<LoggedIn>('http://localhost:5000/api/account/register', user);
  }

  login(userInput: Login): Observable<LoggedIn> {
    return this.http.post<LoggedIn>('http://localhost:5000/api/account/login', userInput);
  }

  getAllMember():Observable<Membre[]>{
    return this.http.get<Membre[]>('http://localhost:5000/api/account')
  }

}
