import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-exp',
  templateUrl: './show-exp.component.html',
  styleUrls: ['./show-exp.component.css']
})
export class ShowExpComponent implements OnInit {

  constructor(private service:SharedService) { }

  ExperienciatList:any=[];

  ModalTitle:string="";
  ActivateAddEditExpComp:boolean=false;
  exp:any;

  ngOnInit(): void {
    this.refreshExpList();
  }

  addClick(){
    this.exp={
      ExperienciaId:0,
      ExperienciaTitulo:"",
      ExperienciaDescipcion:"",
      ExperienciaFechaInicio:""
    }
    this.ModalTitle="Agregar Departamento";
    this.ActivateAddEditExpComp=true;
  }

  closeClick(){
    this.ActivateAddEditExpComp=false;
    this.refreshExpList();
  }

  deleteClick(item:any){
    if(confirm('¿Estás seguro de que quieres eliminar este registro?')){
      this.service.eliminarExperiencia(item.ExperienciaId).subscribe(data=>{
        alert(data.toString());
        this.refreshExpList();
      })
    }
  }

  editClick(item:any){
    this.exp=item;
    this.ModalTitle="Editar Experiencia";
    this.ActivateAddEditExpComp=true;
  }

  refreshExpList(){
    this.service.obtenerListaExperiencias().subscribe(data=>{
      this.ExperienciatList=data;
    });
  }
}
