import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-detalle-recetario',
  templateUrl: './detalle-recetario.component.html',
  styleUrls: ['./detalle-recetario.component.scss']
})
export class DetalleRecetarioComponent implements OnInit {
  @Input('r1') r1 : Receta; // coche para mostrar



  constructor() {
    
   }

  ngOnInit() {
  }

}
