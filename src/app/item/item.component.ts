import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ItemMovie} from '../item.service';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  @Input() item!: ItemMovie;
  @Input() user!: LoginComponent

  toggleWatch(){
    alert(`Your are watching ${this.item.movie_title}`)
  }
  toggleHide(){
    const id = this.item.movieId
    const element = document.getElementById(id.toString())
    element?.classList.toggle('hidden')
  }
  addMovieFavorites(){
    console.log(this.user.getUser)
  } 
}
