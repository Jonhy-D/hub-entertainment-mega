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
    alert(`Your are watching ${this.item.title}`)
  }
  toggleHide(){
    const id = this.item.id
    const element = document.getElementById(id.toString())
    element?.classList.toggle('hidden')
  }
}
