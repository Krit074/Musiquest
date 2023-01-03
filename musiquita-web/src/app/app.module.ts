import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './componentes/app.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GeneroMusicalService } from './servicios/generoMusical.service';
import { ResultadosService } from './servicios/resultados.service';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent,
    EncuestaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GeneroMusicalService, ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
