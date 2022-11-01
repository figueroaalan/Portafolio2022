import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedService} from './shared.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AddEditExpComponent } from './experiencia/add-edit-exp/add-edit-exp.component';
import { ShowExpComponent } from './experiencia/show-exp/show-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    EducacionComponent,
    EncabezadoComponent,
    AddEditExpComponent,
    ShowExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
