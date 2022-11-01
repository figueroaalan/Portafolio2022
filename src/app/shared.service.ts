import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  obtenerListaEducacion():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/educacion');
  }

  agregarEdudacion(val:any){
    return this.http.post(this.APIUrl+'/educacion/crear',val);
  }

  updateEducacion(val:any){
    return this.http.put(this.APIUrl+'/educacion/',val);
  }

  eliminarEducacion(val:any) {
    return this.http.delete(this.APIUrl+'/educacion/'+val);
  }
 
  obtenerListaExperiencias():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/experiencia');
  }

  agregarExperiencia(val:any){
    return this.http.post(this.APIUrl+'/experiencia/crear',val);
  }

  actualizarExperiencia(val:any){
    return this.http.put(this.APIUrl+'/experiencia/',val);
  }

  eliminarExperiencia(val:any) {
    return this.http.delete(this.APIUrl+'/experiencia/'+val);
  }
}
