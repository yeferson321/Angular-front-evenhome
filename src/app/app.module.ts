import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciousuarioComponent } from './iniciousuario/iniciousuario.component';
import { RegistrousuarioComponent } from './registrousuario/registrousuario.component';
import { Nav1Component } from './nav1/nav1.component';
import { InicioComponent } from './inicio/inicio.component';
import { Nav2Component } from './nav2/nav2.component';
import { EducacionComponent } from './educacion/educacion.component';
import { RouterinicioComponent } from './routerinicio/routerinicio.component';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';
import { Nav3Component } from './nav3/nav3.component';
import { ActualizardatosComponent } from './actualizardatos/actualizardatos.component';
import { Nav4Component } from './nav4/nav4.component';
import { VisualizacvComponent } from './visualizacv/visualizacv.component';
import { EditarcvComponent } from './editarcv/editarcv.component';
import { InicioempresaComponent } from './inicioempresa/inicioempresa.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { EditarcvidiomaComponent } from './editarcvidioma/editarcvidioma.component';
import { ActualizardatosempresaComponent } from './actualizardatosempresa/actualizardatosempresa.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';
import { EditarimgComponent } from './editarimg/editarimg.component';
import { EditarhabilidadesComponent } from './editarhabilidades/editarhabilidades.component';
import { FooterComponent } from './footer/footer.component';
import { PublicarofertaComponent } from './publicaroferta/publicaroferta.component';
import { DestacarofertaComponent } from './destacaroferta/destacaroferta.component';
import { PlanesempresaComponent } from './planesempresa/planesempresa.component';
import { Footer2Component } from './footer2/footer2.component';
import { EditarcvempresaComponent } from './editarcvempresa/editarcvempresa.component';
import { Navempresa1Component } from './navempresa1/navempresa1.component';
import { VcusuarioComponent } from './vcusuario/vcusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciousuarioComponent,
    RegistrousuarioComponent,
    Nav1Component,
    InicioComponent,
    Nav2Component,
    EducacionComponent,
    RouterinicioComponent,
    PerfilusuarioComponent,
    Nav3Component,
    ActualizardatosComponent,
    Nav4Component,
    VisualizacvComponent,
    EditarcvComponent,
    InicioempresaComponent,
    RegistroempresaComponent,
    EmpresasComponent,
    EmpleoComponent,
    EditarcvidiomaComponent,
    ActualizardatosempresaComponent,
    PerfilempresaComponent,
    EditarimgComponent,
    EditarhabilidadesComponent,
    FooterComponent,
    PublicarofertaComponent,
    DestacarofertaComponent,
    PlanesempresaComponent,
    Footer2Component,
    EditarcvempresaComponent,
    Navempresa1Component,
    VcusuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
