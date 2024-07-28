import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemService } from '../item.service';
import { ItemListSeriesComponent } from '../item-list-series/item-list-series.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [HeaderComponent, ItemListSeriesComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
}
