import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarcvempresa',
  templateUrl: './editarcvempresa.component.html',
  styleUrls: ['./editarcvempresa.component.css']
})
export class EditarcvempresaComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;
  datos_user;
  datos;
  id_user;

  constructor(private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService,) { }

  ngOnInit(): void {

    this.client.getRequestdatos_user('http://localhost:5000/api/v01/datos/empresa', localStorage.getItem('token')).subscribe(

      (datos): any => {
        this.datos_user = datos["datos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      nombrempresa: ['', Validators.required],
      denominacionsocial: ['', Validators.required],
      pais: ['', Validators.required],
      tamañoempresa: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigo: ['', Validators.required],
      direccion: ['', Validators.required],
      telefonoempresa: ['', Validators.required],
      actividad: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    (function () {
      'use strict'

      var forms = document.querySelectorAll('.needs-validation')

      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    })()

  }

  async onSubmit() {

    if (this.form.valid) {

      this.id_user = localStorage.getItem("id_user")

      console.log("id:", this.id_user)

      let data = {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        telefono: this.form.value.telefono,
        nombrempresa: this.form.value.nombrempresa,
        denominacionsocial: this.form.value.denominacionsocial,
        pais: this.form.value.pais,
        tamañoempresa: this.form.value.tamañoempresa,
        ciudad: this.form.value.ciudad,
        codigo: this.form.value.codigo,
        direccion: this.form.value.direccion,
        telefonoempresa: this.form.value.telefonoempresa,
        actividad: this.form.value.actividad,
        descripcion: this.form.value.descripcion,
        id: this.id_user

      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/actualizar/datos/empresa', data, localStorage.getItem('token')).subscribe(

        (response: any) => {

          this.load = true;

          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Datos guardados'
          }).then(() => {
            this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.route.navigate(['/editar_cv_empresa']));
          }) 

          console.log(response);
          
      },
      (error) => {

        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'warning',
          title: 'Error al guardar'
        }).then(() => {
          this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.route.navigate(['/editar_cv_empresa']));
        })

        console.log(error.status); 

      })


    } else {

      console.log("Form error");
    }


  }


}
