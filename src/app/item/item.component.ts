import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMovie, ItemService} from '../item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  @Input() item!: ItemMovie;
  userId = Number(document.cookie[document.cookie.length - 1])
  constructor(private itemService: ItemService){}

  toggleWatch(){
    alert(`Your are watching ${this.item.movie_title}`)
  }
  toggleHide(){
    const id = this.item.movieId
    const element = document.getElementById(id.toString())
    element?.classList.toggle('hidden')
  }
  insertFavorite(){
    const item_id = this.item.movieId
    this.itemService.addMovieFavorites(item_id, this.userId)
    .subscribe({
      next: (v) => {
        console.log("Movie added successfully", v)
      }
      ,
      error: (err) => {
        console.log('An error occurred', err)
      }
    })
  }
}
