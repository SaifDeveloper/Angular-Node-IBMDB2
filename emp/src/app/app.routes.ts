import { Routes } from '@angular/router';
// import { userInfo } from 'os';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'add-user',
        component: AddUserComponent
    }
]