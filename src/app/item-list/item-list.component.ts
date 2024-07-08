import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Item, ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit{

  items$: Observable<Item[]> | undefined;

  constructor(private ItemService: ItemService){}

  ngOnInit(): void {
    this.items$ = this.ItemService.getItems();
  }
}
