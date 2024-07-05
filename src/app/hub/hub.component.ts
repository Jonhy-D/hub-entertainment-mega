import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [ItemListComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {

}
