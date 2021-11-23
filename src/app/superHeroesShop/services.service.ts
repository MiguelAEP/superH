import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  URLAPLI: string = 'https://akabab.github.io/superhero-api/api';

  constructor(private _http: HttpClient) {}

  getHeroes() {
    return this._http.get(`${this.URLAPLI}/all.json`).pipe(
      map((heroe: any) =>
        heroe.map((respuesta: any) => {
          return {
            nombre: respuesta.name,
            imagenes: respuesta.images.md,
          };
        })
      )
    );
  }

  obtenerImagen(nombre: string) {
    let primeraLetra = nombre.charAt(0).toLowerCase();
    let completoLetro = nombre.substr(1);
    nombre = primeraLetra.concat(completoLetro);
    this.nombre = `assets/img/${nombre}.jpg`;

    return `assets/img/${nombre}.jpg`;
  }

  nombre: string = '';

  get envioImagen() {
    return this.nombre;
  }
}
