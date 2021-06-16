import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciousuario',
  templateUrl: './iniciousuario.component.html',
  styleUrls: ['./iniciousuario.component.css']
})
export class IniciousuarioComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    private route: Router,
    public auth: AuthService,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      correo: ['', Validators.email],
      contraseña: ['', Validators.required],
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
        correo: this.form.value.correo,
        contraseña: this.form.value.contraseña,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login', data).subscribe(

        (response: any) => {

          this.route.navigate(['/perfil_usuario'])

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
            title: 'Inicio exitoso'
          })//.then(() => {
          //  this.route.navigate( ['/perfil_usuario'])
          //}) 

          console.log(response);

          this.auth.login(response.token)

          this.auth.setCourrentUser(response.nombre)

          this.auth.setCourrentApellidos(response.apellidos)

          this.auth.setCourrentCorreo(response.correo)

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
            title: 'Puede que su correo o contraseña sean incorrectos'
          })

          console.log(error.status);

        })


    } else {

      console.log("Form error");
    }


  }


}
