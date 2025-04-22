// // import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AppUser } from '../models/app-user.model';
// import { LoggedIn } from '../models/looged-in.model';
// import { Login } from '../models/login.model';
// import { Membre } from '../models/memeber.model';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   http = inject(HttpClient);
//   private readonly _baseApiUrl: string='http://localhost:5000/';

//   register(user: AppUser): Observable<LoggedIn> {
//    return this.http.post<LoggedIn>(this._baseApiUrl+'api/account/register', user);
//   }

//   login(userInput: Login): Observable<LoggedIn> {
//     return this.http.post<LoggedIn>(this._baseApiUrl+'api/account/login', userInput);
//   }

//   getAllMember():Observable<Membre[]>{
//     return this.http.get<Membre[]>(this._baseApiUrl+'api/account')
//   }
// // 
// }
