import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Amiibo } from '../../models/amiibo.interface';
import { AmiiboService } from '../../services/amiibo.service';

@Component({
  selector: 'app-amiibo-list',
  imports: [RouterModule],
  templateUrl: './amiibo-list.component.html',
  styleUrl: './amiibo-list.component.scss',
})
export class AmiiboListComponent {
  amiibos = signal<Amiibo[]>([]);

  constructor(private amiiboService: AmiiboService) {}

  ngOnInit(): void {
    this.amiiboService
      .getAmiibos()
      .subscribe((res) => this.amiibos.set(res.slice(0, 20)));
  }

  public trackAmiibosBy(head: string, tail: string): any {
    return head + tail;
  }
}
