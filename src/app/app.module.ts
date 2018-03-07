import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


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
//Pipe
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RecetarioComponent } from './recetario/recetario.component';
import { DetalleRecetarioComponent } from './recetario/detalle-recetario/detalle-recetario.component';
import { FilterReceta } from './pipes/filter.receta';
import { RecetasService } from './providers/recetas.service';
import { FormularioComponent } from './recetario/formulario/formulario.component';



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
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CochesService,
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
