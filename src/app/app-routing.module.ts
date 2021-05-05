import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterinicioComponent } from './routerinicio/routerinicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { EducacionComponent } from './educacion/educacion.component';
import { IniciousuarioComponent } from './iniciousuario/iniciousuario.component';
import { RegistrousuarioComponent } from './registrousuario/registrousuario.component';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';

const routes: Routes = [
  { path: '', component:RouterinicioComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'educacion', component:EducacionComponent},
  { path: 'inicio_usuario', component:IniciousuarioComponent },
  { path: 'registro_usuario', component:RegistrousuarioComponent},
  { path: 'perfil_usuario', component:PerfilusuarioComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
