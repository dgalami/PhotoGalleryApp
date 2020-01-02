import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from './../shared/image.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnChanges {

  title = 'Recent Photos';
  filterBy?: string = 'all';
  visibleImages: any[] = [];
  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
  }

}
