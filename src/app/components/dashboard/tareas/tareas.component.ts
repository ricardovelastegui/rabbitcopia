import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea';
import { TareaService } from 'src/app/services/tarea.service';



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  // isChecked?: boolean;
  // estadoInterruptores: EstadoInterruptor = {};
  constructor(private _tareaService: TareaService, private _snackbar: MatSnackBar, private router: Router) {
    
   }

  //  onToggleChange(id_tarea: number): void {
  //   // Cambia el estado del interruptor para la tarea con el id_tarea dado
  //   this.estadoInterruptores[id_tarea] = !this.estadoInterruptores[id_tarea];
  // }

  // isChecked(id_tarea: number): boolean {
  //   // Obtiene el estado actual del interruptor para la tarea con el id_tarea dado
  //   return this.estadoInterruptores[id_tarea];
  // }
  // estadoInterruptores: { [id_tarea: number]: boolean } = {};
  // onChange(id_tarea: number) {
  //   this.estadoInterruptores[id_tarea] = !this.estadoInterruptores[id_tarea];
  // window.localStorage.setItem('isChecked', JSON.stringify(this.estadoInterruptores));
  // }
  // isChecked(id_tarea: number): boolean {
  //   return this.estadoInterruptores[id_tarea] ?? false;
  // }

  list_tareas: Tarea[] = [];
  displayedColumns: string[] = ['id_tarea', 'nombre', 'estado','acciones']; 
  dataSource!: MatTableDataSource<any>;   

 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {  
    this.cargarTareas();
    // this.switchState = this._tareaService.getSwitchState();
    // const estadoGuardado = window.localStorage.getItem('estadoInterruptores');
    // this.estadoInterruptores = estadoGuardado ? JSON.parse(estadoGuardado) : {};

  }

  
  cargarTareas(){
    this.list_tareas = this._tareaService.getTarea();
    this.dataSource = new MatTableDataSource(this.list_tareas)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  swichear(index: number, cambio: boolean){
    console.log(index);
    this._tareaService.swichear(index, cambio);
  }

  getSlideToggleState(index: number): boolean {
    const estadoGuardado = window.localStorage.getItem(`slideToggleState${index}`);
    return estadoGuardado ? JSON.parse(estadoGuardado) : false;
  }

  eliminarTarea(index: number){
    console.log(index);
    this._tareaService.eliminarTarea(index);
    this.cargarTareas();
    this._snackbar.open('Tarea eliminada', '', {
      duration: 1700,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

   // switchState?: boolean;

   // onToggleChange(event: any): void{
  //   this.switchState = event.checked;
  //   this._tareaService.setSwitchState(this.switchState!);
  // }



}
