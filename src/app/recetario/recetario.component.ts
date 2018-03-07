import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
import { RecetasService } from '../providers/recetas.service';
//import { RecetaService } from '../providers/receta.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  stock : Array<Receta>;  //Array casteado a Receta
  receta1 : Receta;
  glutenfilter: boolean;
  //Datos de la receta, componente show para ver, parametro posicion
  receta: Receta;
 //inicializar los atributos
 constructor( public recetaService:RecetasService ) {
  this.stock=recetaService.getAll();
  this.receta1 = this.stock[0];
  this.glutenfilter=false;

  console.log('RecetarioComponent constructor');     

  /* 
  this.receta = new Receta('Marmitaco');

    this.receta.addIngrediente('Patatas');
    this.receta.addIngrediente('Bonito');
    this.receta.addIngrediente('Pimiento Verde');
    this.receta.addIngrediente('Aceite');
    this.receta.addIngrediente('Pimiento choricero');
    console.log(this.receta);
    this.receta1 = new Receta("");
    console.log(this.receta1);
    this.stock = new Array<Receta>();
    this.stock.push(this.receta);


  */

}

  //llamadas a los Services
  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');    
    //this.stock = this.recetaService.getAll();   

  }
  seleccionar( event, receta : Receta ){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', receta );
    this.receta1=receta;
                   
}
changeGlutenFilter(){
  this.glutenfilter=!this.glutenfilter;
}

}
