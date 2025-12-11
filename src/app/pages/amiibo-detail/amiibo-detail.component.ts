import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Amiibo } from '../../models/amiibo.interface';
import { AmiiboService } from '../../services/amiibo.service';

@Component({
  selector: 'app-amiibo-detail',
  imports: [RouterLink],
  templateUrl: './amiibo-detail.component.html',
  styleUrl: './amiibo-detail.component.scss',
})
export class AmiiboDetailComponent {
  amiiboDetail = signal<Amiibo>({
    amiiboSeries: '',
    character: '',
    gameSeries: '',
    head: '',
    image: '',
    name: '',
    release: {},
    tail: '',
    type: '',
  });

  constructor(
    private amiiboService: AmiiboService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier) {
      this.amiiboService.getAmiiboById(identifier).subscribe((img) => {
        if (!img) {
          this.router.navigateByUrl('/');
        }

        this.amiiboDetail.set(img);
      });
    }
  }
}
