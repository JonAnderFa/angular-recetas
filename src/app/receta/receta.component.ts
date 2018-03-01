import { Component, OnInit } from '@angular/core';
import {Receta} from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {


show: boolean;
posicion: string;
receta: Receta;


  constructor() { 
    console.log('Recetacomponet constructor');

    this.receta = new Receta('Marmitaco');

    this.receta.addIngrediente('Patatas');
    this.receta.addIngrediente('Bonito');
    this.receta.addIngrediente('Pimiento Verde');
    this.receta.addIngrediente('Aceite');
    this.receta.addIngrediente('Pimiento choricero');
    this.show=false;
    this.posicion="down";

  }
  sumarLike(){
    this.receta.numeroLikes++;
  }

  ngOnInit() {
    console.log('Recetacomponet ngOnInit');
  }

  showIngredientes(){
    console.log('Click showIngredientes');
    this.show=!this.show;
   /*
Lo de abajo de una linea es lo mismo que esto   
   if (this.posicion=="down"){
      this.posicion="up";
    }else{
      this.posicion="down";
    }*/
    this.posicion =(this.show)?'up':'down'
  }

}
