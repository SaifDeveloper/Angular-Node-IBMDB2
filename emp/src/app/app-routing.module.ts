import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { AddUserComponent } from '../app/add-user/add-user.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  {
    path: "adduser",
    component: AddUserComponent, 
  },
  {
    path: "",
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
