import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'María';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Raúl','Martin','Horacio'];
  clientesMap = {
    '=0' : 'no tenemos clientes esperando',
    '=1' : 'tenemos 1 clientes esperando',
    '=2' : 'tenemos 2 clientes esperando',
    'other' : 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre = 'Javier';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvaluepair
  persona = {
    nombre: 'Javier',
    edad: 35,
    direccion: 'La loma'
  }

  heroes = [
    {
      nombre: 'Capitan America',
      edad: '38',
      universo: 'Marvel'
    },
    {
      nombre: 'Superman',
      edad: '32',
      universo: 'DC'
    }

  ]

  //Async Pipe
  miObservable = interval(10);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });

}
