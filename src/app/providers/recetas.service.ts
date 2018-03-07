import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { element } from 'protractor';
import { MOCKS_RECETAS } from './mocks.recetas';

@Injectable()
export class RecetasService {

recetas:Receta[];

  constructor() { 
    console.log('RecetasService constructor');
  }
  
  /** 
   * Retorna todos los Recetas que tenemos en Stock
  */
  getAll():Receta[]{
    console.log('RecetaService getAll');
    this.recetas = [];
    let receta;
    
    let jsonData = JSON.parse(MOCKS_RECETAS.stock);

    jsonData.forEach( element => {
      
        receta = new Receta( 
                          
                          element.nombre, 
                          element.cocinero,
                          element.foto,
                          element.descripcion,
                          element.likes,
                          element.isGlutenFree,
                          element.id,
                          element.ingredientes
  
                          );

        this.recetas.push(receta);

    });

    return this.recetas;
  } 
/**
 * Crear Nueva Receta
 * @param receta Receta nueva
 */
  crear(receta:Receta):void{
    this.recetas.unshift(receta);
}

}