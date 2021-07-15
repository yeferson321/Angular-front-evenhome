import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterinicioComponent } from './routerinicio/routerinicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { EducacionComponent } from './educacion/educacion.component';
import { IniciousuarioComponent } from './iniciousuario/iniciousuario.component';
import { RegistrousuarioComponent } from './registrousuario/registrousuario.component';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';
import { ActualizardatosComponent } from './actualizardatos/actualizardatos.component';
import { EditarcvComponent } from './editarcv/editarcv.component';
import { VisualizacvComponent } from './visualizacv/visualizacv.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { EmpresasComponent } from './empresas/empresas.component';

import { InicioempresaComponent } from './inicioempresa/inicioempresa.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';
import { ActualizardatosempresaComponent } from './actualizardatosempresa/actualizardatosempresa.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';
import { PublicarofertaComponent } from './publicaroferta/publicaroferta.component';
import { DestacarofertaComponent } from './destacaroferta/destacaroferta.component';
import { PlanesempresaComponent } from './planesempresa/planesempresa.component';
import { EditarcvempresaComponent } from './editarcvempresa/editarcvempresa.component';
import { VcusuarioComponent } from './vcusuario/vcusuario.component';


const routes: Routes = [
  { path: '', component:RouterinicioComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'educacion', component:EducacionComponent},
  { path: 'inicio_usuario', component:IniciousuarioComponent },
  { path: 'registro_usuario', component:RegistrousuarioComponent},
  { path: 'perfil_usuario', component:PerfilusuarioComponent},
  { path: 'actualizar_datos', component:ActualizardatosComponent},
  { path: 'editar_cv', component:EditarcvComponent},
  { path: 'visualizar_cv', component:VisualizacvComponent},

  { path: 'empresa', component:EmpresasComponent},
  { path: 'empleo', component:EmpleoComponent},

  { path: 'registro_empresa', component:RegistroempresaComponent},
  { path: 'inicio_empresa', component:InicioempresaComponent},
  { path: 'actualizar_datos_empresa', component:ActualizardatosempresaComponent},
  { path: 'perfil_empresa', component:PerfilempresaComponent},
  { path: 'publicar_oferta', component:PublicarofertaComponent},
  { path: 'destacar_oferta', component:DestacarofertaComponent},
  { path: 'planes_empresa', component:PlanesempresaComponent},
  { path: 'editar_cv_empresa', component:EditarcvempresaComponent},
  { path: 'vc_online_usuario', component:VcusuarioComponent},

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
