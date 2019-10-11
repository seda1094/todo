import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FillProfileComponent } from './fill-profile/fill-profile.component';
import { UIModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, FillProfileComponent],
  imports: [
    CommonModule,
    UIModule,
    FormsModule
  ],
  providers:[
    AuthService
  ],
  exports: [
    SignInComponent, SignUpComponent
  ]

})
export class AuthModule { }
