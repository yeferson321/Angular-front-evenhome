import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-vcusuario',
  templateUrl: './vcusuario.component.html',
  styleUrls: ['./vcusuario.component.css']
})
export class VcusuarioComponent implements OnInit {

  datos_user;
  datos_idioma;
  datos_conocimientos;

  constructor(    
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService) { }

  ngOnInit(): void {
    
    this.client.getRequestdatos_anuncios('http://localhost:5000/api/v01/user/vconline').subscribe(

      (datos): any => {
        this.datos_user = datos["datosusuario"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

    this.client.getRequestdatos_anuncios('http://localhost:5000/api/v01/user/vconlineidioma').subscribe(

      (datos): any => {
        this.datos_idioma = datos["datosidioma"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

    this.client.getRequestdatos_anuncios('http://localhost:5000/api/v01/user/vconlineconocimientos').subscribe(

      (datos): any => {
        this.datos_conocimientos = datos["datosconocimientos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )
  }

}
