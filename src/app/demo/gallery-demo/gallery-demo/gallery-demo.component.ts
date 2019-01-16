import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-demo',
  templateUrl: './gallery-demo.component.html',
  styleUrls: ['./gallery-demo.component.css']
})
export class GalleryDemoComponent implements OnInit {

  constructor() { }
  pictures = [
    {
      id: 1,
      title: 'Snow cat',
      img: 'https://gimpan.com/img/cat-snow.jpg'
    },
    {
      id: 2,
      title: 'Korean Burger',
      img: 'https://gimpan.com/img/koreanburger.jpg'
    },
    {
      id: 3,
      title: 'Dog',
      img: 'https://gimpan.com/img/dog.jpeg'
    },
    {
      id: 4,
      title: 'Origami',
      img: 'https://gimpan.com/img/origamipikachu.jpg'
    },
    {
      id: 5,
      title: 'The one ring',
      img: 'https://gimpan.com/img/lotrring.jpg'
    },
    {
      id: 6,
      title: 'Space',
      img: 'https://gimpan.com/img/space.jpg'
    },
    {
      id: 7,
      title: 'Abstract',
      img: 'https://gimpan.com/img/abstractred.jpg'
    },
    {
      id: 8,
      title: 'Ocean floor',
      img: 'https://gimpan.com/img/oceanfloor.jpg'
    },
    {
      id: 9,
      title: 'Flower',
      img: 'https://gimpan.com/img/purpleflowers.jpg'
    },
    {
      id: 10,
      title: 'Spider',
      img: 'https://gimpan.com/img/spider.jpg'
    },
    {
      id: 11,
      title: 'White horse',
      img: 'https://gimpan.com/img/whitehorse.jpg'
    },
    {
      id: 12,
      title: 'Coffee',
      img: 'https://gimpan.com/img/coffee.jpeg'
    }
  ];
  ngOnInit() {
  }

}
