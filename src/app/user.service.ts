import { Injectable } from '@angular/core';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    id: 1,
    name: 'Juan',
    username: 'JuanPanch',
    email: 'juan123@gmail.com',
    isLoggedIn: false,
    favs: []
  }

  getUser(): User {
    return this.user;
  }

  addToFavs(itemId: number): void{
    this.user.favs.push(itemId);
  }

}
