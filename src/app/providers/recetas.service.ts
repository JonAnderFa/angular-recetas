import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { element } from 'protractor';
import { MOCKS_RECETAS } from './mocks.recetas';

@Injectable()
export class RecetasService {

  constructor() { 
    console.log('RecetasService constructor');
  }

  /** 
   * Retorna todos los Recetas que tenemos en Stock
  */
  getAll():Receta[]{
    console.log('RecetaService getAll');
    let recetas:Receta[] = [];
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

        recetas.push(receta);

    });

    return recetas;
  }


}