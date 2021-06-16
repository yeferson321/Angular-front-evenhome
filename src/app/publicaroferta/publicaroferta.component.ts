import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicaroferta',
  templateUrl: './publicaroferta.component.html',
  styleUrls: ['./publicaroferta.component.css']
})
export class PublicarofertaComponent implements OnInit {

  
  form: any = FormGroup;
  load: boolean = true;

  constructor(private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService,) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      trabajo: ['', Validators.required],
      profesiones: ['', Validators.required],
      experiencia: ['', Validators.required],
      herramientas: ['', Validators.required],
      duracion: ['', Validators.required],
      nivel: ['', Validators.required],
      empleo: ['', Validators.required],
      salario: ['', Validators.required],
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
        trabajo: this.form.value.trabajo,
        profesiones: this.form.value.profesiones,
        experiencia: this.form.value.experiencia,
        herramientas: this.form.value.herramientas,
        duracion: this.form.value.duracion,
        nivel: this.form.value.nivel,
        empleo: this.form.value.empleo,
        salario: this.form.value.salario,
        descripcion: this.form.value.descripcion,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/input/anuncio', data).subscribe(

        (response: any) => {

          this.route.navigate(['/destacar_oferta'])

          console.log(response);

        },
        (error) => {

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
            icon: 'error',
            title: 'Puede que algunos de tus datos sean incorrectos'
          }).then(() => {
            this.route.navigate( ['/perfil_empresa'])
          }) 

          console.log(error.status);

        })


    } else {

      console.log("Form error");
    }


  }

}
