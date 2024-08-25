import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Observable } from 'rxjs';
import { ItemService } from '../item.service';
import { ItemSerieComponent } from '../item-serie/item-serie.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ItemSerieComponent, HeaderComponent, CommonModule, ItemComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  itemsSeries$: Observable<any> | undefined;
  itemsMovies$: Observable<any> | undefined;
  userId = Number(document.cookie[document.cookie.length - 1])

  constructor(private ItemService: ItemService){}

  ngOnInit():void{
    this.itemsSeries$ = this.ItemService.getItemsSeriesFav(this.userId)
    this.itemsMovies$ = this.ItemService.getItemsMoviesFav(this.userId)
  }
}
