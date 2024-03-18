import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-random-photo-generator',
  templateUrl: './random-photo-generator.component.html',
  styleUrl: './random-photo-generator.component.css',
})
export class RandomPhotoGeneratorComponent {
  url = '';
  constructor(private service: PhotosService) {
    this.service.fetchPhoto().subscribe((response) => {
      this.url = response.urls.regular;
    });
  }

  generatePhoto() {
    this.service.fetchPhoto().subscribe((response) => {
      this.url = response.urls.regular;
    });
  }
}
