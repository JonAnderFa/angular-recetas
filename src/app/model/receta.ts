/* clase para encapsular los atributos de Receta */
export class Receta{
    //Atributos
    id: number;
    nombre: string;
    foto: string;
    descripcion: string;
    numeroLikes: number;
    isGlutenFree: boolean;
    cocinero: string;
    ingredientes: string[];
    
    
    //Solo es posible un constructor
      constructor(nombre: string,
        cocinero: string ='Anonimo',//Valor por defecto para 'undefined' o sin parametro
      ) { 
        console.log('Receta constructor');
        this.id=-1;
        this.nombre = nombre;
        this.foto = 'assets/img/receta.jpg';
        this.descripcion= 'Creo que no te moriras si lo comes';
        this.numeroLikes= 0;
        this.isGlutenFree= false;
        this.cocinero=cocinero;
        this.ingredientes=[];
        /*
        this.nombre='Bocata Calamares';
        this.foto='https://i1.wp.com/www.hoytapeo.com/wp-content/uploads/2017/11/bocadillo-calamares-porron-canalla.jpg?resize=960%2C640';
        this.descripcion='Los bocadillos de calamares en Madrid son famosos, es innegable. ¿Quién va por los barrios más castizos de la capital y no le apetece un buen bocadillo de calamares? Nos preguntamos porque algo tan sencillo consigue conquistar nuestro estómago. Pero la respuesta es clara, ¡nos encanta!Bien es conocido el debate de donde hacen el mejor bocadillo de calamares, y aunque no sepamos el lugar exacto, podemos afirmar que vayas donde vayas, es un éxito. Una de las rutas gastronómicas madrileñas por excelencia es la de los bocadillos de calamares.Su origen es difuso pero en los años sesenta, esta tradición se asentó en los alrededores de la Plaza Mayor. Ir a comerse un bocata era cosa de los estudiantes madrileños que  poco a poco con el tiempo se ha convertido en toda una tradición. Acompañar el bocadillo de una bebida bien fría puede cambiar una mañana normal y convertirla en excepcional.';
        this.numeroLikes=12;
        this.isGlutenFree=false;
        this.cocinero="Carlos Argiñano";
        this.ingredientes=['Calamares','Limon','Pan','Salsa Ali-oli'];
        */
      }
      addIngrediente(ingrediente: string){
        this.ingredientes.push(ingrediente);
      }
      toString(){
        console.log(`Receta nombre=${this.nombre}`);
      }

}