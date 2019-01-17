import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(private router: Router) {}

  pictures = [
    {
      id: 'sitegrids',
      title: 'Grids',
      img: 'https://gimpan.com/img/gridlayout.png'
    },
    {
      id: 'gallery',
      title: 'Gallery',
      img: 'https://gimpan.com/img/dog.jpeg'
    },
    {
      id: 'recipebook',
      title: 'Recipe Book',
      img: 'https://gimpan.com/img/koreanburger.jpg'
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      img: '../../assets/1.jpg'
    }

  ];

  onClick(id: string) {
    this.router.navigate([id]);
  }

}
