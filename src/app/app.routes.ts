import { Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';
import { HomeComponent } from './comp/home/home.component';
import { NavComponent } from './comp/nav/nav.component';
import { addGuard } from './guard/add.guard';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: "register", component: RegisterComponent },
    {
        path: "", component: NavComponent,
        canActivate: [addGuard],
        children: [
            { path: "home", component: HomeComponent }

        ]
    }
];
