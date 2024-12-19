import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule aquí
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RedContactosComponent } from './pages/red-contactos/red-contactos.component';
import { ViabilidadComponent } from './pages/viabilidad/viabilidad.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InteligenciaArtificialComponent } from './pages/inteligencia-artificial/inteligencia-artificial.component';
import { MachineLearningComponent } from './pages/machine-learning/machine-learning.component';
import { PerfilInversorComponent } from './pages/perfil-inversor/perfil-inversor.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MejorasComponent } from './pages/mejoras/mejoras.component';
import { PrediccionExitoComponent } from './pages/prediccion-exito/prediccion-exito.component';

// Define las rutas de la aplicación
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'red-contactos', component: RedContactosComponent },
  { path: 'viabilidad', component: ViabilidadComponent },
  { path: 'inteligencia-artificial', component: InteligenciaArtificialComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
  { path: 'perfil-inversor/:id', component: PerfilInversorComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'mejoras', component: MejorasComponent }, // Ruta para mejoras
  { path: 'prediccion-exito', component: PrediccionExitoComponent }, // Ruta para predicción de éxito
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    SobreNosotrosComponent,
    RegistroComponent,
    BienvenidaComponent,
    PerfilComponent,
    ProyectosComponent,
    RedContactosComponent,
    NavbarComponent,
    ViabilidadComponent,
    InteligenciaArtificialComponent,
    MachineLearningComponent,
    PerfilInversorComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}