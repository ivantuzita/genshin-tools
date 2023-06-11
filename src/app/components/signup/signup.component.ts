import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

    ngOnInit(): void {
      this.signUpForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    onSubmit(){
      if (this.signUpForm.valid){
        this.auth.signUp(this.signUpForm.value)
          .subscribe({
            next:(res=>{
              alert(res.message);
            }),
            error:(err)=>{
              alert(err?.error.message)
            }
          })
        this.signUpForm.reset();
        this.router.navigate(['login'])
      }
      else {
  
      }
    }
}
