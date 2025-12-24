import { Component, Input } from '@angular/core';
import { Giveaway } from '../../models/giveaway.interface';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-giveaway-card',
  imports: [RouterModule, MatCardModule, MatChipsModule],
  templateUrl: './giveaway-card.component.html',
  styleUrl: './giveaway-card.component.scss',
})
export class GiveawayCardComponent {
  @Input() giveaway!: Giveaway;
  @Input() displayMode: 'list' | 'grid' = 'grid';
}
