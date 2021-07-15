import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;
  modal: boolean = false;

  data;
  dato;
  datos_anuncios;

  id_idioma: any = "desarrollador web";

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      palabra: ['', Validators.required],
      habilidad: ['', Validators.required],
    });

    this.client.getRequestdatosvc('http://localhost:5000/api/v01/datos/anuncios/all').subscribe(

      (data): any => {

        this.datos_anuncios = data["dato"]

        console.log(data);

      }, (error) => {

        console.log(error);

      }

    )
  }

  consultarDatos() {

    let data = {
      palabra: this.form.value.palabra,
      habilidad: this.form.value.habilidad
    }

    this.client.getRequestdatos('http://localhost:5000/api/v01/consulta/anuncios', data).subscribe(

      (data): any => {
        this.datos_anuncios = data["dato"]

        console.log(data);

      }, (error) => {

        console.log(error);
      }

    )
  }

  anuncio(){
    
    Swal.fire({
      imageUrl: 'assets/Archivos_estaticos/undraw_cancel_u1it.svg',
      html:
        'Por favor ' +
        '<a href="/inicio_usuario">Iniciar sesión</a> ' +
        'o ' +
        '<a href="/registro_usuario">Regístrate</a> ',
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
    })

  }

  correo(id_anuncio, usuario_id, profesiones, nombre) {

    let data = { 'id_anuncio': id_anuncio, "usuario_id": usuario_id, 'profesiones': profesiones, 'nombre': nombre}

    this.client.postRequestt('http://localhost:5000/api/v01/user/generarcorreo', data, localStorage.getItem('token')).subscribe(
      (response: any) => {
        console.log("Se manda el dato", response)
        this.load = true;
        console.log(response);

        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          showCloseButton: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Aplicas te correctamente a la oferta, la empresa tiene 3 dias para comunicarse con tigo',

        }).then(() => {
          this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.route.navigate(['/empleo']));
        })

      },
      (error) => {

        console.log(error.status);
      })
  }

}
