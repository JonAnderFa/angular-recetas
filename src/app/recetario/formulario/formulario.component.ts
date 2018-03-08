import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';

//COMO INSTALAR JQUERY EN UN COMPONENTE 
//************************************************
/*nmp install --save-dev jquery
*********************************************************/
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
formulario : FormGroup;
ingredientes: FormArray;


  constructor(private recetasService: RecetasService, private fb: FormBuilder) {
    console.log('FormularioComponet Constructor');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
   
   }
   
   createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre:['',[Validators.required]]
    });
  }
  /** 
   * Evento para crear un nuevo Ingrediente
  */
 clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
}

clickEliminarIngrediente( index ){
  console.log('FormularioComponent clickEliminarIngrediente');    
  this.ingredientes.removeAt(index);
}
  ngOnInit() {
    console.log('FormularioComponet ngOnInit');
  }
  crearFormulario():void{
    console.log('FormularioComponet CrearFormulario');
    this.formulario = this.fb.group({
      //FormControl = (input) =>['value', [validaciones]]
      nombre:['',[Validators.required, Validators.minLength(2)]],
      cocinero:['',[Validators.minLength(5)]],
      foto:[''],
      gluten:['false',Validators.required],
      descripcion:['',[Validators.required, Validators.minLength(100)]],
      ingredientes:this.fb.array([this.createIngredienteFormGroup()])
    });
  }
  sumitar():void{
    console.log('FormularioComponet onSubmit');
    //TODO recoger datos del formulario
    let receta=this.mapearFormularioReceta(this.formulario);
    this.recetasService.crear(receta);
    this.formulario.reset({
      gluten: "false",
      foto: "/assets/img/receta.jpg"
    });
    this.ingredientes.controls.splice(1);
    //Cerrar modal
    
    //$('#modalReceta').hide('modal');
    $('#btn-close').click();

  }
  /**
   * Mapear los datos del formulario a una receta
   * @param form : FormGroup
   */
  mapearFormularioReceta(form :FormGroup):Receta{
    let nombre=form.value.nombre;
    let cocinero=form.value.cocinero;
    let foto=form.value.foto;
    if(foto==""){foto="/assets/img/receta.jpg"};
    let descripcion=form.value.descripcion;
    let gluten=(form.value.gluten==="true")?true:false;
    let receta = new Receta(nombre,cocinero,foto,descripcion,0,gluten);

    //recuperar los ingredientes
    form.value.ingredientes.map (element=>{
      receta.addIngrediente(element.nombre);
    });
    return receta;
  }
  /**
   * Clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput(control:FormControl):string{
    const CLASS_ERROR = "form-inline form-group has-error";
    const CLASS_SUCCES = "form-inline form-group has-success";
    if(control.dirty){
      return(control.valid)?CLASS_SUCCES:CLASS_ERROR;
    }else{
      return"form-group form-inline";
    }
  }
}
