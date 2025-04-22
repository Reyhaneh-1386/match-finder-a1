
import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/account/register/register.component";
import { LoginComponent } from "./components/account/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MemberComponent } from "./components/member/member.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { FootrrComponent } from "./components/footrr/footrr.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: 'account/login', component: LoginComponent },
    { path: 'footer', component: FootrrComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'members', component: MemberComponent },
    { path: '**', component: NotFoundComponent }
];

