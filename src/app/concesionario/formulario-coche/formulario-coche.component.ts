import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CochesService } from '../../providers/coches.service';
import { Coche } from '../../model/coche';

//COMO INSTALAR JQUERY EN UN COMPONENTE 
//************************************************
/*nmp install --save-dev jquery
*********************************************************/
import * as $ from 'jquery';

@Component({
  selector: 'app-formulario-coche',
  templateUrl: './formulario-coche.component.html',
  styleUrls: ['./formulario-coche.component.scss']
})
export class FormularioCocheComponent implements OnInit {

  formulario : FormGroup;
  
  
    constructor(private cochesService: CochesService, private fb: FormBuilder) {
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
        marca:['',[Validators.required, Validators.minLength(2)]],
        modelo:['',[Validators.required, Validators.minLength(2)]],
        foto:['/assets/img/coche_default.png'],
        version:[''],
        puertas:['3'],
        caballos:['100'],
        consumo:['7.2']

      });
    }
    sumitar():void{
      console.log('FormularioComponet onSubmit');
      //TODO recoger datos del formulario
      let coche=this.mapearFormularioCoche(this.formulario);
      this.cochesService.crear(coche);
      this.formulario.reset({
        foto: "/assets/img/coche_default.png",
        puertas:'3',
        caballos:'100',
        consumo:'7.2'
      });
      //Cerrar modal
      
      //$('#modalReceta').hide('modal');
      $('#btn-close').click();
  
    }
    /**
     * Mapear los datos del formulario a una coche
     * @param form : FormGroup
     */
    mapearFormularioCoche(form :FormGroup):Coche{
      let narca=form.value.marca;
      let modelo=form.value.modelo;
      let version=form.value.version;
      let foto=form.value.foto;
      if(foto==""){foto="/assets/img/coche.jpg"};
      let puertas=form.value.puertas;
      let caballos=form.value.caballos;
      let consumo=form.value.consumo;
      let coche = new Coche("marca","modelo",3);
  
      return coche;
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
