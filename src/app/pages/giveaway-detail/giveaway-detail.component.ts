import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Giveaway } from '../../models/giveaway.interface';
import { GiveawayService } from '../../services/giveaway.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-giveaway-detail',
  imports: [RouterLink, MatExpansionModule, MatButtonModule, DatePipe],
  templateUrl: './giveaway-detail.component.html',
  styleUrl: './giveaway-detail.component.scss',
})
export class GiveawayDetailComponent {
  giveawayDetail = signal<Giveaway>({
    id: 0,
    title: '',
    worth: '',
    thumbnail: '',
    image: '',
    description: '',
    instructions: '',
    open_giveaway_url: '',
    published_date: '',
    type: '',
    platforms: '',
    end_date: '',
    users: 0,
    status: '',
    gamerpower_url: '',
    open_giveaway: '',
  });

  showAllDetails = false;

  constructor(
    private giveawayService: GiveawayService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier) {
      this.giveawayService.getGiveawayById(identifier).subscribe((img) => {
        if (!img) {
          this.router.navigateByUrl('/');
        }

        this.giveawayDetail.set(img);
      });
    }
  }
}
