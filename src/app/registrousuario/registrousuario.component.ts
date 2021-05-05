import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.email],
      telefono: ['', Validators.required],
      contraseña: ['', Validators.required],
    });

  }

  async onSubmit() {

    if (this.form.valid) {

      let data = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        correo: this.form.value.correo,
        telefono: this.form.value.telefono,
        contraseña: this.form.value.contraseña,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/registro', data).subscribe(

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
            title: 'Registro exitoso'
          }).then(() => {
            this.route.navigate( ['/perfil_usuario'])
          }) 

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
