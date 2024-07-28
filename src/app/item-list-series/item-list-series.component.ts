import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../item.service';
import { ItemSerieComponent } from '../item-serie/item-serie.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list-series',
  standalone: true,
  imports: [ItemSerieComponent, CommonModule],
  templateUrl: './item-list-series.component.html',
  styleUrl: './item-list-series.component.css'
})
export class ItemListSeriesComponent{
  items$: Observable<any> | undefined;

  constructor(private ItemService: ItemService){}

  ngOnInit():void{
    this.items$ = this.ItemService.getItemsSeries()
  }
}
