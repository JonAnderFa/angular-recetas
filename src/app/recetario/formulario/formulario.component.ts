import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';

//COMO INSTALAR JQUERY EN UN COMPONENTE 
//************************************************
/*nmp install --save-dev jquery
*********************************************************/
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
formulario : FormGroup;
  constructor(private recetasService: RecetasService, private fb: FormBuilder) {
    console.log('FormularioComponet Constructor');
    this.crearFormulario();
   
   }

  ngOnInit() {
    console.log('FormularioComponet ngOnInit');
  }
  crearFormulario():void{
    console.log('FormularioComponet CrearFormulario');
    this.formulario = this.fb.group({
      //FormControl = (input) =>['value', [validaciones]]
      nombre:['',[Validators.required, Validators.minLength(2)]],
      cocinero:[''],
      foto:[''],
      gluten:[true],
      descripcion:['']
    });
  }
  sumitar():void{
    console.log('FormularioComponet onSubmit');
    //TODO recoger datos del formulario
    let nombre=this.formulario.value.nombre;
    let cocinero=this.formulario.value.cocinero;
    let foto=this.formulario.value.foto;
    if(foto==""){foto="/assets/img/receta.jpg"};
    let descripcion=this.formulario.value.descripcion;
    let gluten=this.formulario.value.gluten;
    let receta = new Receta(nombre,cocinero,foto,descripcion,0,gluten);
    this.recetasService.crear(receta);
    this.formulario.reset();
    this.crearFormulario();
    //Cerrar modal
    
    //$('#modalReceta').hide('modal');
    $('#btn-close').click();
    //Limpiar formulario
    this.formulario.value.nombre="";
  }
}
