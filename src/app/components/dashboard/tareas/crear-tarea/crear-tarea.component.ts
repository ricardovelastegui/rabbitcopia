import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit{

  importancia: any[] = ['Alta', 'Media', 'Baja'];
  estado: any[] = ['EN PROCESO', 'COMPLETO', 'INCOMPLETO'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _tareaService: TareaService, private router: Router, private _snackbar: MatSnackBar){
    this.form = this.fb.group({
      id_tarea: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      importancia: ['', Validators.required]
    })
  }

  ngOnInit(): void {
      
  }

  agregarTarea(){
    const tar: Tarea ={
      id_tarea: this.form.value.id_tarea,
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      estado: this.form.value.estado,
      importancia: this.form.value.importancia
    }
    this._tareaService.agregarTarea(tar);
    this.router.navigate(['/dashboard/tareas']);

    this._snackbar.open('La tarea fue agregada con éxito', '', {
      duration: 1700,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }


}
