import { NgModule } from '@angular/core';
import { LoginComponent } from "../auth/login/login.component";
import { ForgotPasswordComponent } from "../auth/forgot-password/forgot-password.component";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
    ],
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
    ],
    providers: []
})

export class AuthModule { }