import {inject} from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const auth = inject(CookieService)
  const rout = inject(Router)
  try{
    const token: boolean = auth.check('token')
    if(!token){
      rout.navigate(['./auth/login'])
    }return token
  }catch(e){
    console.log("Something is wrong", e)
    return false
  }
};

