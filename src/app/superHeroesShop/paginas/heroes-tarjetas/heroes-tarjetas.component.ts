import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-heroes-tarjetas',
  templateUrl: './heroes-tarjetas.component.html',
  styleUrls: ['./heroes-tarjetas.component.css']
})
export class HeroesTarjetasComponent implements OnInit {


  heroes : any [] = []

  constructor(private service : ServicesService) { 

  
    this.service.getHeroes().subscribe(elementos=>{
     
     elementos.forEach((element:any) => {

        this.heroes.push(element)
        this.heroes.splice(50)
       
     });
      
    })

  }

  ngOnInit(): void {
    
  }

}
