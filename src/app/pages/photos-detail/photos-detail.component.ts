import { Component, signal } from '@angular/core';
import { Photo } from '../../models/photo.interface';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photos-detail',
  imports: [RouterLink],
  templateUrl: './photos-detail.component.html',
  styleUrl: './photos-detail.component.scss',
})
export class PhotosDetailComponent {
  photoDetail = signal<Photo>({
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: '',
  });

  constructor(
    private photoService: PhotosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    if (identifier) {
      this.photoService.getPhotoById(identifier).subscribe((img) => {
        if (!img) {
          this.router.navigateByUrl('/');
        }

        this.photoDetail.set(img);
        console.log('photoDetail --> ', this.photoDetail());
      });
    }
  }
}
