import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizardatos',
  templateUrl: './actualizardatos.component.html',
  styleUrls: ['./actualizardatos.component.css']
})
export class ActualizardatosComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;

  constructor(private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      cargo: ['', Validators.required],
      tipoidentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      fechanacimiento: ['', Validators.required],
      estadocivil: ['', Validators.required],
      telefono: ['', Validators.required],
      otrotelefono: ['', Validators.required],
      horadecontacto: ['', Validators.required],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
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
        genero: this.form.value.genero,
        cargo: this.form.value.cargo,
        tipoidentificacion: this.form.value.tipoidentificacion,
        identificacion: this.form.value.identificacion,
        fechanacimiento: this.form.value.fechanacimiento,
        estadocivil: this.form.value.estadocivil,
        telefono: this.form.value.telefono,
        otrotelefono: this.form.value.otrotelefono,
        horadecontacto: this.form.value.horadecontacto,
        pais: this.form.value.pais,
        ciudad: this.form.value.ciudad,
        direccion: this.form.value.direccion,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/actualizar', data).subscribe(

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
            title: 'Datos basicos guardados'
          })//.then(() => {
          //  this.route.navigate( ['/perfil_usuario'])
          //}) 

          console.log(response);

        },
        (error) => {

          console.log(error.status);

        })


    } else {

      console.log("Form error");
    }


  }

}
