 import { Routes } from '@angular/router';
 import { InicioComponent } from './inicio/inicio.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { Component } from '@angular/core';
import { InformacionComponent } from './informacion/informacion.component';

 export const routes: Routes = [
    {path: '', component: InicioComponent }, 
    {path: 'perfumes', component: PerfumesComponent},
    {path: 'informacion', component: InformacionComponent},
    {path: '', redirectTo: '', pathMatch: 'full'}

];
