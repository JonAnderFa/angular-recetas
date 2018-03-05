import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input ('cocheParametro') coche: Coche;
  @Input ('coche1')coche1:Coche;
  @Input ('coche2')coche2:Coche;
  //los paramtros de salida se realuzan a traves de Eventos
  @Output() cocheSeleccionado =new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
seleccionar($event){
  console.log("CocheComponet: para ti papa %o", this.coche);
  this.cocheSeleccionado.emit({coche: this.coche});
}
}
