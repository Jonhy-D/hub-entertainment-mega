import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemSerie, ItemService} from '../item.service';
import { ItemListSeriesComponent } from '../item-list-series/item-list-series.component';

@Component({
  selector: 'app-item-serie',
  standalone: true,
  imports: [CommonModule, ItemListSeriesComponent],
  templateUrl: './item-serie.component.html',
  styleUrl: './item-serie.component.css'
})
export class ItemSerieComponent {
  @Input() item!: ItemSerie;

  userId = Number(document.cookie[document.cookie.length - 1])
  constructor(private itemService: ItemService){}

  toggleWatch(){
    alert(`Your are watching ${this.item.serie_title}`)
  }
  toggleHide(){
    const id = this.item.serieId
    const element = document.getElementById(id.toString())
    element?.classList.toggle('hidden')
  }

  insertFavorite(){
    const item_id = this.item.serieId
    this.itemService.addSerieFavorites(item_id, this.userId)
    .subscribe({
      next: (v) => {
        console.log("Serie added successfully", v)
      }
      ,
      error: (err) => {
        console.log('An error occurred', err)
      }
    })
  }
}
