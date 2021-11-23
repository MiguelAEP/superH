import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.component.html',
  styleUrls: ['./lego.component.css']
})
export class LegoComponent {

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
}
