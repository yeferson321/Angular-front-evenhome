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
