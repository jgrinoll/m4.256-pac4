import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Giveaway } from '../../models/giveaway.interface';
import { GiveawayService } from '../../services/giveaway.service';

@Component({
  selector: 'app-giveaway-list',
  imports: [RouterModule],
  templateUrl: './giveaway-list.component.html',
  styleUrl: './giveaway-list.component.scss',
})
export class GiveawayListComponent {
  giveaways = signal<Giveaway[]>([]);

  constructor(private giveawayService: GiveawayService) {}

  ngOnInit(): void {
    this.giveawayService
      .getGiveaways()
      .subscribe((res) => this.giveaways.set(res.slice(0, 20)));
  }
}
