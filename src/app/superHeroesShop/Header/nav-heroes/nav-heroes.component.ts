import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-nav-heroes',
  templateUrl: './nav-heroes.component.html',
  styleUrls: ['./nav-heroes.component.css']
})
export class NavHeroesComponent {

  figuras:any [] = [
    {
    nombre:'batman'
  },
  {
    nombre:'hulk'
  },
  {
    nombre:'spiderman'
  },
]

lego:any [] = [
  {
  nombre:'batman'
},
{
  nombre:'hulk'
},
{
  nombre:'spiderman'
},
]

ropa:any [] = [
  {
  nombre:'batman'
},
{
  nombre:'hulk'
},
{
  nombre:'spiderman'
},
]

disfraces:any [] = [
  {
  nombre:'batman'
},
{
  nombre:'hulk'
},
{
  nombre:'spiderman'
},
]

validacionEmail = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

  miFormulario : FormGroup = this.fb.group({
    email : ['', [Validators.required, Validators.pattern(this.validacionEmail) ,Validators.minLength(2)]],
    password : ['', [Validators.required,,Validators.minLength(2)]]
  })

  constructor(private fb : FormBuilder) { }

  opening: boolean = false;
  open(){
   this.opening = !this.opening;
  }

  registrar(){
    Swal.fire('Cuenta registrada correctamente , registro exitoso..')
    this.opening = false;
  }

  validado( campo:string){
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched
}

}
