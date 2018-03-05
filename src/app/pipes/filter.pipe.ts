import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/**
 * Filtro para buscar en una coleccion de coches, no es CaseSensitive
 * @param stock: es un Coche[](array de coches)
 * @param searchText: es un string con la marca o modelo del coche
 */
transform(stock: Coche[], searchText: string): Coche[] {

    if(!stock) return [];
    if(!searchText) return stock;
    let marcaModelo="";
    searchText = searchText.toLowerCase();
    return stock.filter( it => {
        marcaModelo=it.marca+" "+it.modelo;
        marcaModelo=marcaModelo.toLowerCase();
        return marcaModelo.toLowerCase().includes(searchText);
    });
   }

}