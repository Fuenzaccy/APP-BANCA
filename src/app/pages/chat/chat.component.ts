import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // Lista de contactos simulada
  contactos = [
    { id: 1, nombre: 'Mario Ruiz Ferrer', foto: 'assets/12.jfif' },
    { id: 2, nombre: 'Carlos Méndez Aguilar', foto: 'assets/13.jfif' },
    { id: 3, nombre: 'Lucía Gutiérrez Navarro', foto: 'assets/14.jfif' },
    { id: 4, nombre: 'Patricia Torres Palacios', foto: 'assets/15.png' }
  ];

  // Propiedad para el inversor actual
  inversor: any;

  // Array de mensajes del chat
  mensajes: { texto: string; tipo: string }[] = [];
  nuevoMensaje: string = ''; // Input del mensaje nuevo

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturar el ID del inversor desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inversor = this.contactos.find((contacto) => contacto.id === id);

    // Mensaje de bienvenida
    this.mensajes.push({
      texto: `Hola, soy ${this.inversor.nombre}. ¿En qué puedo ayudarte?`,
      tipo: 'recibido'
    });
  }

  // Método para enviar mensajes
  enviarMensaje(): void {
    if (this.nuevoMensaje.trim()) {
      // Agregar el mensaje enviado por el usuario
      this.mensajes.push({ texto: this.nuevoMensaje, tipo: 'enviado' });

      // Respuesta automática simulada después de un breve tiempo
      setTimeout(() => {
        this.responderAutomaticamente();
      }, 1000);

      this.nuevoMensaje = ''; // Limpiar el input después de enviar
    }
  }

  // Método de respuesta automática
  responderAutomaticamente(): void {
    const respuestas = [
      'Gracias por tu mensaje, lo revisaré en breve.',
      '¿Podrías darme más detalles sobre tu consulta?',
      'Estoy aquí para ayudarte con tu proyecto.',
      'Interesante, me gustaría saber más sobre eso.',
      'Por favor, déjame unos minutos para analizar tu solicitud.'
    ];

    // Seleccionar una respuesta aleatoria
    const respuestaAleatoria =
      respuestas[Math.floor(Math.random() * respuestas.length)];

    this.mensajes.push({ texto: respuestaAleatoria, tipo: 'recibido' });
  }
}