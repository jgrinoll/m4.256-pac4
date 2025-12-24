import { Component } from '@angular/core';
import { GiveawayListComponent } from '../giveaway-list/giveaway-list.component';

@Component({
  selector: 'app-home',
  imports: [GiveawayListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
