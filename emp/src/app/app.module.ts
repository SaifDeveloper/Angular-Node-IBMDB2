import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserModel } from './Model/user.model';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { UserModelComponent } from './user-model/user-model.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomeComponent,
    UserModelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
