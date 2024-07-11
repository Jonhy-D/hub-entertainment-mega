import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [ItemListComponent, HeaderComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {

}
