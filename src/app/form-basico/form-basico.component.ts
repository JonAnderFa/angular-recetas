import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {
//atributo FormGroup para usar en el html
formulario:FormGroup;
fruta:string;

  constructor(private fb:FormBuilder) { 
    //inicializo fruta
    this.fruta="banana";
    //Crear formulario
    this.formulario =this.fb.group({
      //nombre=>Control=input
      nombre : ['',//value
        [ Validators.required,//validacion de requerimiento
          Validators.minLength(3)//valodacion de contneido minimo
        ]

    
    
    ]

    });
  }

  ngOnInit() {
  }
  //html =>form (ngSubmit)="sumitar($event)"
  enviar(){
    console.log("Enviar formulario", this.formulario.controls.nombre.value);
  }

}
