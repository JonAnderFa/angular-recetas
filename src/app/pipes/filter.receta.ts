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
transform(stock: Receta[], searchText: string, isGlutenFree: boolean): Receta[] {
console.log(isGlutenFree);
//Si no hay recetas => vacio
    if(!stock) return [];
//Si no hay busqueda y isGlutenFree => Solo recetas SIN Gluten
    if(!searchText && isGlutenFree){
        return stock.filter( it => {
            if(it.isGlutenFree){
                return it;
            }
        });
    }
//Si hay busquedas todas
    if(!searchText) return stock;

   
        let nombreCocinero="";
        searchText = searchText.toLowerCase();
        return stock.filter( it => {
            if(isGlutenFree){
                if(it.isGlutenFree){
                nombreCocinero=it.nombre+it.cocinero+it.ingredientes;
                nombreCocinero=nombreCocinero.toLowerCase();
                return nombreCocinero.toLowerCase().includes(searchText);
                }
            }else{
                nombreCocinero=it.nombre+it.cocinero+it.ingredientes;
                nombreCocinero=nombreCocinero.toLowerCase();
                return nombreCocinero.toLowerCase().includes(searchText);
            }
        });
    }
    

}