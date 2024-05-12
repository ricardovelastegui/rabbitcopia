import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  list_tareas: Tarea[] = [
    {id_tarea: 1, nombre: 'Reporte', descripcion:'hacer corrida de clientes', estado:'EN PROCESO', importancia: 'Alta',},
  {id_tarea: 2, nombre: 'Revisión de código', descripcion: 'Revisar el código del módulo X', estado: 'COMPLETO', importancia: 'Alta'},
  {id_tarea: 3, nombre: 'Implementación de API', descripcion: 'Crear y documentar API RESTful', estado: 'EN PROCESO', importancia: 'Alta'},
  {id_tarea: 4, nombre: 'Corrección de errores', descripcion: 'Corregir bugs identificados en la fase de pruebas', estado: 'INCOMPLETO', importancia: 'Alta'},
  {id_tarea: 5, nombre: 'Optimización de consultas', descripcion: 'Mejorar el rendimiento de consultas SQL', estado: 'EN PROCESO', importancia: 'Alta'},
  {id_tarea: 6, nombre: 'Diseño de interfaz de usuario', descripcion: 'Crear mockups y prototipos de la interfaz', estado: 'INCOMPLETO', importancia: 'Alta'}
  ];  

  constructor() { }
  indiceActual: number | null = null;

  getTarea(){
    //retorna un clon del arreglo ELEMENT_DATA
    return this.list_tareas.slice();
  }

  eliminarTarea(index:number){
    this.list_tareas.splice(index, 1);
  }

  swichear(index:number, cambio: boolean){
    this.indiceActual = index;
    window.localStorage.setItem(`slideToggleState${index}`, JSON.stringify(cambio));
  }

  agregarTarea(tarea: Tarea){
    this.list_tareas.push(tarea);
  }

  // switchear(index: number){
  //   this.list_tareas.splice(index, 1);
  // }
  // private switchState: boolean = false;
  // setSwitchState(state: boolean): void{
  //   this.switchState = state;
  //   localStorage.setItem('switchState', state.toString());
  // }
  // getSwitchState(): boolean{
  //   const savedState = localStorage.getItem('switchState');
  //   if(savedState){
  //     this.switchState = savedState == 'true';
  //   }
  //   return this.switchState;
  // }


}
