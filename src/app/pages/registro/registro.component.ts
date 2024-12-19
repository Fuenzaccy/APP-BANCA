import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private router: Router) {}

  // Función para redirigir a la página de bienvenida
  irABienvenida() {
    console.log('Redirigiendo a la página de bienvenida...');
    this.router.navigate(['/bienvenida']); 
  }
}