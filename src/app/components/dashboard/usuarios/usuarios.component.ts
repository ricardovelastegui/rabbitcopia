import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';



const ELEMENT_DATA: User[] = [
  {id: 1, empleado: 'juan ruiz', numtareas: 3},
{id: 2, empleado: 'María López', numtareas: 5},
{id: 3, empleado: 'Carlos García', numtareas: 2},
{id: 4, empleado: 'Ana Martínez', numtareas: 4},
{id: 5, empleado: 'Pedro Sánchez', numtareas: 1},
{id: 6, empleado: 'Laura Rodríguez', numtareas: 6},
{id: 7, empleado: 'Javier Fernández', numtareas: 3},
{id: 8, empleado: 'Elena Gómez', numtareas: 2},
{id: 9, empleado: 'Sara Pérez', numtareas: 4},
{id: 10, empleado: 'Miguel Ramírez', numtareas: 7}
];
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'empleado', 'numtareas'];
  dataSource = ELEMENT_DATA;
  constructor(){}
  ngOnInit(): void {
      
  }

}
