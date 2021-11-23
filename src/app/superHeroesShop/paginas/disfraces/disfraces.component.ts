import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-disfraces',
  templateUrl: './disfraces.component.html',
  styleUrls: ['./disfraces.component.css']
})
export class DisfracesComponent  {
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
