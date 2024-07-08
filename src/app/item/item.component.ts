import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  @Input() item!: Item;
  toggleWatch(){
    alert(`You are watching ${this.item.title}`)
  }
  toggleHide(){
    alert(`You hide ${this.item.title}`)
  }
}
