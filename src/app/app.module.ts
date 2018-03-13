import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//Nuestro Modulo para Routing
import { AppRouter} from './app.route';
//Componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
//Service
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
import {TodosService}from'./providers/todos.service';
//Pipe
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RecetarioComponent } from './recetario/recetario.component';
import { DetalleRecetarioComponent } from './recetario/detalle-recetario/detalle-recetario.component';
import { FilterReceta } from './pipes/filter.receta';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { FormularioCocheComponent } from './concesionario/formulario-coche/formulario-coche.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';



@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    RoundPipe,
    FilterPipe,
    FilterReceta,
    RecetarioComponent,
    DetalleRecetarioComponent,
    FormularioComponent,
    FormularioCocheComponent,
    PlantillaComponent,
    TodosComponent,
    FormBasicoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    HttpClientModule,
    CochesService,
    RecetasService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
