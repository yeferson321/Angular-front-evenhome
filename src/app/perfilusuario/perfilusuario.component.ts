import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;
  modal: boolean = false;
  datos_user;
  datos;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    
    this.client.getRequestdatos_user('http://localhost:5000/api/v01/user/datos', localStorage.getItem('token')).subscribe(

      (datos): any => {
        this.datos_user = datos["datos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      fechanaci: ['', Validators.required],
      telefono: ['', Validators.required],
      sexo: ['', Validators.required],
    });

  }

  async onSubmit() {

    if (this.form.valid) {

      let data = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        documento: this.form.value.documento,
        fechanaci: this.form.value.fechanaci,
        telefono: this.form.value.telefono,
        sexo: this.form.value.sexo
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/actualizar', data).subscribe(

        (response: any) => {

          //this.route.navigate( ['/educacion'])

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
          })

        },
        (error) => {

          console.log(error.status);

        })


    } else {

      console.log("Form error");
    }


  }

}
