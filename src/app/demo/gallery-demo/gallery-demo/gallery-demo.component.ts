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
      title: 'Recipe Book',
      img: 'https://gimpan.com/img/koreanburger.jpg'
    },
    {
      id: 2,
      title: 'Roadmap',
      img: '../../assets/1.jpg'
    },
    {
      id: 3,
      title: 'Gallery',
      img: 'https://gimpan.com/img/dog.jpeg'
    }
  ];
  ngOnInit() {
  }

}
