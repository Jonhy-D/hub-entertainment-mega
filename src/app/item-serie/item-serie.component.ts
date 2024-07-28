import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemSerie} from '../item.service';
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
  toggleWatch(){
    alert(`Your are watching ${this.item.serie_title}`)
  }
  toggleHide(){
    const id = this.item.serieId
    const element = document.getElementById(id.toString())
    element?.classList.toggle('hidden')
  }

  addSerieFavorites(){
    alert("Añadiendo a favoritos")
  }  
}
