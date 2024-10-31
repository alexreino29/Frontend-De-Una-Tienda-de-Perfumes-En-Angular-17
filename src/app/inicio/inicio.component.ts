import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  menu: string = ''

  Opcion(menu: string){
    this.menu = menu;
  }

}
