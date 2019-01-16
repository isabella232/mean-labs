import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

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

}
