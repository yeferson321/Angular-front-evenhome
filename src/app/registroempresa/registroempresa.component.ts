import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.component.html',
  styleUrls: ['./registroempresa.component.css']
})
export class RegistroempresaComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.email],
      contraseña: ['', Validators.required],
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

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')


      // Loop over them and prevent submission
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

      let data = {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        telefono: this.form.value.telefono,
        correo: this.form.value.correo,
        contraseña: this.form.value.contraseña,
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
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/empresa/registro', data).subscribe(

        (response: any) => {

          this.route.navigate(['/perfil_empresa'])

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
            title: 'Registro exitoso'
          })//.then(() => {
          //  this.route.navigate( ['/perfil_usuario'])
          //}) 

          console.log(response);

          this.auth.login(response.token)

          this.auth.setCourrentUserempresa(response.nombre)

          this.auth.setCourrentCorreoempresa(response.correo)

          this.auth.setCourrentidempresa(response.id_user)

          localStorage.setItem('token', response.token)
          console.log(localStorage.getItem('token'));


        },
        (error) => {

          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'warning',
            title: 'El correo ya existe'
          }).then(() => {
            this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.route.navigate(['/registro_empresa']));
          })

        })


    } else {

      console.log("Form error");
    }


  }

}
