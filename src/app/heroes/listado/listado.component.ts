import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes : string [] = ['Spiderman', 'Hulk', 'Thor', 'Capitan America']
  heroesBorrados : string = '';

  borrarHeroe (){
    const heroeBorrado = this.heroes.shift() || '';
    this.heroesBorrados = heroeBorrado;
  }
}
