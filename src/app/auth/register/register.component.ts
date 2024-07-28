import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  errorForm: boolean = false;
  formRegister: FormGroup = new FormGroup({});

  constructor(){}

  ngOnInit():void {
    this.formRegister = new FormGroup({
      FirstN: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      LastN: new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
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

  sendRegister():void{
    const {FirstN, LastN, email, password} = this.formRegister.value

  }
}
