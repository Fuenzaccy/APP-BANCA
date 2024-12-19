import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-inversor',
  templateUrl: './perfil-inversor.component.html',
  styleUrls: ['./perfil-inversor.component.scss'],
})
export class PerfilInversorComponent implements OnInit {
  // Lista de inversores
  inversores = [
    {
      id: 1,
      nombre: 'Mario Ruiz Ferrer',
      foto: 'assets/12.jfif',
      sector: 'Inclusión financiera, tecnología para la educación.',
      experiencia:
        'Economista con experiencia en banca social y fundador de una fintech enfocada en microcréditos.',
      enfoque: 'Proyectos tecnológicos con impacto en comunidades vulnerables.',
    },
    {
      id: 2,
      nombre: 'Carlos Méndez Aguilar',
      foto: 'assets/13.jfif',
      sector: 'Innovación tecnológica, energía renovable.',
      experiencia:
        'Ingeniero en software con experiencia en proyectos sostenibles.',
      enfoque: 'Soluciones tecnológicas para energía limpia.',
    },
    {
      id: 3,
      nombre: 'Lucía Gutiérrez Navarro',
      foto: 'assets/14.jfif',
      sector: 'Educación y desarrollo social.',
      experiencia:
        'Profesora universitaria con proyectos educativos enfocados en comunidades rurales.',
      enfoque: 'Accesibilidad a la educación mediante plataformas digitales.',
    },
    {
      id: 4,
      nombre: 'Patricia Torres Palacios',
      foto: 'assets/15.png',
      sector: 'Finanzas verdes y emprendimientos sociales.',
      experiencia:
        'Asesor financiero especializado en proyectos de impacto social.',
      enfoque: 'Inversión en startups con enfoque sostenible.',
    },
  ];

  // Almacena el inversor seleccionado
  inversorSeleccionado: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene el ID desde la URL y busca el inversor correspondiente
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.inversorSeleccionado = this.inversores.find(
      (inversor) => inversor.id === id
    );
  }
}