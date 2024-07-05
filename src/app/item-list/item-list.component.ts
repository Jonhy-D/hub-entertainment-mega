import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items = [{
      id: 1,
      title: 'Thor love and thunder',
      description: 'The film follows Thor (Chris Hemsworth) on a journey unlike anything he has faced before: a search for inner peace.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOyZD9CL1eGq1pKq4tPcXp6KX-iw5J2krnA&s',
      duration: '160 min',
      genre: 'Action',
      type: ''
    },
    {
      id: 2,
      title: 'Kingdom of the Planet of the Apes',
      description: 'ajklniofnoadfklasjmfkla',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wqa3LtQG2hYDOLlJ20Jgy0yoiKPkvcw_qQ&s',
      duration: '152 min',
      genre: 'Fiction',
      type: ''
    }
  ]
}
