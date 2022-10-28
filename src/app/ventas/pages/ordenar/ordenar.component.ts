import { Component } from '@angular/core';
import { Heroe, Universo } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  valor: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre:'Superman',
      edad: 35,
      universo: Universo.DC,
      poder: 5000
    },
    {
      nombre:'Batman',
      edad: 40,
      universo: Universo.DC,
      poder: 2000
    },
    {
      nombre:'Hulk',
      edad: 29,
      universo: Universo.Marvel,
      poder: 5000
    },
    {
      nombre:'Thor',
      edad: 31,
      universo: Universo.Marvel,
      poder: 4800
    },
    {
      nombre:'Hawkeye',
      edad: 37,
      universo: Universo.Marvel,
      poder: 2100
    },
    {
      nombre:'IronMan',
      edad: 34,
      universo: Universo.Marvel,
      poder: 4000
    },
    {
      nombre:'WonderWoman',
      edad: 36,
      universo: Universo.DC,
      poder: 5000
    }
  ]

  cambiarBool(){
    this.valor = !this.valor;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

}
