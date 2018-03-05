export class Coche{
    id: number;
    marca: string;
    modelo: string;
    version: string;
    foto: string;
    kilometraje: number;
    puertas: number;
    combustible: string;

    constructor(marca:string, modelo: string,version?:string,kilometraje?:number,puertas?:number,combustible?:string,foto: string ='assets/img/coche_default.png'){
        this.id=-1;
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.foto=foto;
        this.kilometraje=kilometraje;
        this.puertas=puertas;
        this.combustible=combustible;

    }
}