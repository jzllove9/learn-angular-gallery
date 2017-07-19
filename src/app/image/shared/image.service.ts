import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }

}


const IMAGES = [
  { "id": 1, "category": "boats", "captions": "View from a boat", "url": "assets/img/1.jpg" },
  { "id": 2, "category": "boats", "captions": "View from a rest", "url": "assets/img/2.jpg" },
  { "id": 3, "category": "boats", "captions": "View from a lie", "url": "assets/img/3.jpg" },
  { "id": 4, "category": "boats", "captions": "View from a funny", "url": "assets/img/4.jpg" },
  { "id": 5, "category": "boats", "captions": "View from a sad", "url": "assets/img/5.jpg" },
  { "id": 6, "category": "camping", "captions": "View from a happy", "url": "assets/img/6.jpg" },
  { "id": 7, "category": "library", "captions": "View from a angry", "url": "assets/img/7.jpg" },
  { "id": 8, "category": "library", "captions": "View from a apple", "url": "assets/img/8.jpg" },
  { "id": 9, "category": "library", "captions": "View from a pair", "url": "assets/img/9.jpg" },
  { "id": 10, "category": "library", "captions": "View from a cherry", "url": "assets/img/10.jpg" },
  { "id": 11, "category": "camping", "captions": "View from a 1", "url": "assets/img/11.jpg" },
  { "id": 12, "category": "camping", "captions": "View from a 2", "url": "assets/img/12.jpg" },
  { "id": 13, "category": "library", "captions": "View from a 3", "url": "assets/img/13.jpg" },
  { "id": 14, "category": "library", "captions": "View from a 4", "url": "assets/img/14.jpg" },
  { "id": 15, "category": "camping", "captions": "View from a 5", "url": "assets/img/15.jpg" },
  { "id": 16, "category": "library", "captions": "View from a 6", "url": "assets/img/16.jpg" },
];