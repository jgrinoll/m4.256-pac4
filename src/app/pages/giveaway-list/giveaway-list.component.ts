import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Giveaway } from '../../models/giveaway.interface';
import { GiveawayService } from '../../services/giveaway.service';
import { GiveawayCardComponent } from '../../components/giveaway-card/giveaway-card.component';

@Component({
  selector: 'app-giveaway-list',
  imports: [MatProgressSpinnerModule, GiveawayCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './giveaway-list.component.html',
  styleUrl: './giveaway-list.component.scss',
})
export class GiveawayListComponent {
  giveaways = signal<Giveaway[]>([]);
  loading = signal<boolean>(true);
  viewMode = signal<'list' | 'grid'>('grid');

  constructor(private giveawayService: GiveawayService) {}

  ngOnInit(): void {
    this.giveawayService
      .getGiveaways()
      .subscribe((res) => {
        this.giveaways.set(res.slice(0, 20));
        this.loading.set(false);
      });
  }

  setViewMode(mode: 'list' | 'grid'): void {
    this.viewMode.set(mode);
  }
}
