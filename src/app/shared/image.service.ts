import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {'id': 1, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 2, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 3, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 4, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 5, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 6, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 7, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 8, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 9, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'},
  {'id': 10, 'category': 'Ira', 'caption': 'Ira baby photoshoot', 'url': 'assets/img/baby_01.jpg'}
];