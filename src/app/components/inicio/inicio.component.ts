import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  @Input() img: string = 'valor init';
  constructor() {

  }
  registro(){
    console.log('Registro');
  }

}
