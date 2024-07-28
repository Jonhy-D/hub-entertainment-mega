import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HeaderComponent, ItemListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
}
