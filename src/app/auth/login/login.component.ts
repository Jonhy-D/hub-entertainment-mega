import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});
  constructor(private authService: AuthService, private cookie:CookieService, private router:Router) {}
  ngOnInit():void{
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])
    })
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value
    this.authService.sendCredentials(email,password)
      .subscribe({
        next: (v) => {
          console.log("User logged in successfully")
          this.cookie.set('token',v,3, '/')
          this.router.navigate(['./'])
        }
        ,
        error: () => {
          this.errorSession = true;
          console.log('An error occurred with your email or password')
        }
      })
  }
}
