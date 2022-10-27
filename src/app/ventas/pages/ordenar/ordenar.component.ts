import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  valor: boolean = true;

  cambiarBool(){
    this.valor = !this.valor;
  }

}
