export class Usuario{
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
    avatar:string='',
    sexo:Lista=Lista.Indeterminado,
    ){
        this.id=-1;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.avatar=avatar;
        this.sexo=sexo;
    }
}
export enum Lista {
    Masculino="Masculino",
    Femenino="Femenino",
    Indeterminado="Ideterminado"
}