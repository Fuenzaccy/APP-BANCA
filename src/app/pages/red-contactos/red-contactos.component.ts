import { Component } from '@angular/core';

@Component({
  selector: 'app-red-contactos',
  templateUrl: './red-contactos.component.html',
  styleUrls: ['./red-contactos.component.scss']
})
export class RedContactosComponent {
  contactos = [
    { id: 1,nombre: 'Mario Ruiz Ferrer', foto: 'assets/12.jfif' },
    { id: 2,nombre: 'Carlos Méndez Aguilar', foto: 'assets/13.jfif' },
    { id: 3,nombre: 'Lucía Gutiérrez Navarro', foto: 'assets/14.jfif' },
    { id: 4,nombre: 'Patricia Torres Palacios', foto: 'assets/15.png' }
  ];
}