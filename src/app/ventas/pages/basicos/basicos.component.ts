import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  constructor() { }

  nombre: string = 'jaViEr';
  fecha: Date = new Date();

}
