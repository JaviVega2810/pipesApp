import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, Universo } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = 'sin_valor'): Heroe[] {

    switch(orderPor){

      case 'nombre':
        return heroes = heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1);

      case 'edad':
        return heroes = heroes.sort( (a,b) => (a.edad > b.edad) ? 1 : -1);

        case 'poder':
          return heroes = heroes.sort( (a,b) => (a.poder < b.poder) ? 1 : -1);

      default:
        return heroes;
    }
  }

}
