import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas = [
    {id: 1, nombre: 'nombre de tarea 1',descripcion:'descripcion de tarea', estado:'INCOMPLETO', tiempo:'1 hora', importancia:'ALTA'},
    {id: 2, nombre: 'nombre de tarea 2',descripcion:'descripcion de tarea', estado:'COMPLETO', tiempo:'3 horas', importancia:'NORMAL'},
    {id: 3, nombre: 'nombre de tarea 3',descripcion:'descripcion de tarea', estado:'INCOMPLETO', tiempo:'1 hora', importancia:'NORMAL'},
    {id: 4, nombre: 'nombre de tarea 4',descripcion:'descripcion de tarea', estado:'COMPLETO', tiempo:'30 minutos', importancia:'ALTA'},
    {id: 5, nombre: 'nombre de tarea 5',descripcion:'descripcion de tarea', estado:'EN PROCESO', tiempo:'15 minutos', importancia:'ALTA'},
    {id: 6, nombre: 'nombre de tarea 6',descripcion:'descripcion de tarea', estado:'COMPLETO', tiempo:'1 dias', importancia:'ALTA'},
    {id: 7, nombre: 'nombre de tarea 7',descripcion:'descripcion de tarea', estado:'INCOMPLETO', tiempo:'2 horas', importancia:'NORMAL'},
  ];
  constructor() { }

  getTareas(): Observable<any[]>{

    return of(this.tareas);

  }
}
