import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { BaucherComponent } from './baucher/baucher.component';
import { DbaucherComponent } from './dbaucher/dbaucher.component';



@NgModule({
  declarations: [
    EmpleadoComponent,
    CuentaComponent,
    BaucherComponent,
    DbaucherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MantenimientoModule { }
