import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-exp',
  templateUrl: './add-edit-exp.component.html',
  styleUrls: ['./add-edit-exp.component.css']
})
export class AddEditExpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() exp:any;
  experienciaId:number=0;
  ExperienciaTitulo:string="";
  experienciaDescripcion:string="";
  experienciaFecha_inicio:string="";

  ngOnInit(): void {
    this.experienciaId= this.exp.id;
    this.ExperienciaTitulo= this.exp.titulo;
    this.experienciaDescripcion= this.exp.descripcion;
    this.experienciaFecha_inicio= this.exp.fecha_inicio;
  }

  agregarExperiencia(){
    var val = {id:this.experienciaId,
      titulo:this.ExperienciaTitulo,
      descripcion:this.experienciaDescripcion,
      fecha_inicio:this.experienciaFecha_inicio};

    this.service.agregarExperiencia(val).subscribe(res=>{
      alert(res.toString());
    });
    
  }

  actualizarExperiencia(){
    var val = {
      id:this.experienciaId,
      titulo:this.ExperienciaTitulo,
      descripcion:this.experienciaDescripcion,
      fecha_inicio:this.experienciaFecha_inicio};

    this.service.actualizarExperiencia(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
