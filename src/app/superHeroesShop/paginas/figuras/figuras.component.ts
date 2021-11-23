import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css']
})
export class FigurasComponent implements OnInit {

  prueba : string = ''
  constructor(private activeRouting : ActivatedRoute,
            private service : ServicesService) { 
    
    this.activeRouting.params.subscribe(elementos=>{
        this.nombre = elementos['nombre']
        this.service.obtenerImagen(this.nombre)
        this.prueba =this.service.envioImagen;
        
    })
  }
  
  nombre : string = '';

  ngOnInit(): void {}

  

}
