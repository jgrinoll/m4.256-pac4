import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Photo } from '../../models/photo.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  imports: [RouterModule],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.scss',
})
export class PhotosListComponent {
  photos = signal<Photo[]>([]);

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService
      .getPhotos()
      .subscribe((res) => this.photos.set(res.slice(0, 20)));
  }
}
