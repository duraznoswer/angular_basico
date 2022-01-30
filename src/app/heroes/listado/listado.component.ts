import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', ' Hulk', 'Thor', 'José Gerardo' ];
  
  // mostrarDato: boolean = false;
  heroeBorrado: string = '';

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
  //  this.mostrarDato = true;
   
    

}
}
