export class usuario{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    avatar: string;
    sexo: Lista;


    constructor(
    nombre:string,
    apellido:string='',
    email:string='',
    sexo:Lista=Lista.Indeterminado,
    ){
        this.id=-1;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.sexo=sexo;



    }













}
enum Lista {Masculino,Femenino,Indeterminado}