import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  @Input() item: any;
  onWatch(){
    alert("You are watching")
  }

  setHide(){
    alert("You hide the movie")
  }
}
