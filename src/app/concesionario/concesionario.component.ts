import { Component, OnInit } from '@angular/core';
import {Coche}from '../model/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {
  stock: Array<Coche>; //Array casteado a Coche
  coche1: Coche;
  coche2: Coche;

  constructor() {
    console.log('ConcesionarioComponent constructor');

    this.coche1=new Coche('','');
    this.coche1.foto=("");
    this.coche2=new Coche('','');
    this.coche2.foto=("");

    this.stock= new Array<Coche>();
    this.stock.push(new Coche('Seat','Panda','v2',8989,3,'Gasolina','https://imgredirect.milanuncios.com/fg/1914/74/191474936_1.jpg'));
    this.stock.push(new Coche('Toyota','Verso','v2',3333,5,'Diesel','https://www.coches.com/fotos_historicas/toyota/Verso-2013/high_toyota_verso-2013_r7.jpg'));
    this.stock.push(new Coche('Opel','Corsa','v1.6',1666,3,'Hibrido','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplA8Y4U_Mtm2S9gFygPsD21D2phE6Vt0uitFO0bQTRUtCjJSzSw'));
   }
recibirCoche(event){
  console.log('ConcesionrioComponet :recibirCoche %o',event.coche);
  this.coche2=this.coche1;
  this.coche1=event.coche;
  
}
  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');
    
  }

}
