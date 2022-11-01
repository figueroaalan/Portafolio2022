import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import  {EncabezadoComponent} from './encabezado/encabezado.component';

const routes: Routes = [
  {path: 'educacion', component: EducacionComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: '', component: EncabezadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
