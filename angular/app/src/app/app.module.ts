import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, SignupComponent, UsersComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [LoginService, SignupService],
    bootstrap: [AppComponent],
})
export class AppModule {}
