import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  fotosHeroes : any = [
  {
    name : "batman",
    img : "assets/img/batman.jpg"
  },
  {
    name : "batman",
    img : "assets/img/deadpool.jpg"
  },
  {
    name : "batman",
    img : "assets/img/hulk.jpg"
  },
  {
    name : "batman",
    img : "assets/img/iroman.jpg"
  },
  {
    name : "batman",
    img : "assets/img/spiderman.jpg"
  },
  {
    name : "batman",
    img : "assets/img/thor.jpg"
  },
  ]

  constructor(private config : NgbCarouselConfig) { 
    this.config.interval = 3000;
    this.config.pauseOnHover = true;
    this.config.showNavigationArrows=false;
   }

  ngOnInit(): void {
  }

}
