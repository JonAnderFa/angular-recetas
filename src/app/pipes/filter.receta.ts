import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';
@Pipe({
  name: 'filter'
})
export class FilterReceta implements PipeTransform {
/**
 * Filtro para buscar en una coleccion de Recetas, no es CaseSensitive
 * @param stock: es un Receta[](array de Recetas)
 * @param searchText: es un string con la marca o modelo del Receta
 */
transform(stock: Receta[], searchText: string): Receta[] {

    if(!stock) return [];
    if(!searchText) return stock;
    let nombreCocinero="";
    searchText = searchText.toLowerCase();
    return stock.filter( it => {
        nombreCocinero=it.nombre+" "+it.cocinero;
        nombreCocinero=nombreCocinero.toLowerCase();
        return nombreCocinero.toLowerCase().includes(searchText);
    });
   }

}