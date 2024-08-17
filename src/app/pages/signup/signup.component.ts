import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(
    private signupService: SignupService,
    private router: Router,
  ) {}
  SignUpObj: any = {
    name: '',
    email: '',
    phoneno: '',
    password: '',
  };

  http = inject(HttpClient);

  onSubmit(signUpForm: any) {
    this.signupService.addUser(this.SignUpObj).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }

    )
  }
}
