import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res=>{
            alert(res.message);
            this.loginForm.reset();
            this.router.navigate(['']);
          }),
          error:(err=>{
            alert()
          })
        })
    }
    else {

    }
  }
}
