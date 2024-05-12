import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TareasComponent } from './tareas/tareas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { CrearTareaComponent } from './tareas/crear-tarea/crear-tarea.component';
import { VerTareaComponent } from './tareas/ver-tarea/ver-tarea.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    TareasComponent,
    UsuariosComponent,
    CrearTareaComponent,
    VerTareaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule    
  ]
})
export class DashboardModule { }
