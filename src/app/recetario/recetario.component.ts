import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
//import { RecetaService } from '../providers/receta.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  stock : Array<Receta>;  //Array casteado a Receta
  receta1 : Receta;

  //Datos de la receta, componente show para ver, parametro posicion
  receta: Receta;
 //inicializar los atributos
 constructor( /*public recetaService:RecetaService*/ ) {

  console.log('RecetarioComponent constructor');     
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

  /* estos datos nos los provee el Service
    this.stock.push( new Coche('Seat','Panda',3,'https://www.minicar.es/large/Fiat-Panda-%281980%29-RBA-Entrega-29-1%3A43-i33233.jpg') );
    this.stock.push( new Coche('Toyota','Verso',4,'https://www.supremeautomotivegroup.com/assets/stock/expanded/white/640/2017tos110001_640/2017tos110001_640_07.jpg') );
    this.stock.push( new Coche('Opel','Corsa',5) );
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


}
