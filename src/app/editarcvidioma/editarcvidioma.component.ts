import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-editarcvidioma',
  templateUrl: './editarcvidioma.component.html',
  styleUrls: ['./editarcvidioma.component.css']
})
export class EditarcvidiomaComponent implements OnInit {

  load: boolean = true;
  form: any = FormGroup;
  Idiomas: boolean = false;
  datos_user;
  datos;

  constructor(private fb: FormBuilder,
    private route: Router,
    private client: ClientService,) { }

  ngOnInit(): void {

    this.client.getRequestdatos_user('http://localhost:5000/api/v01/user/datosidioma', localStorage.getItem('token')).subscribe(

      (datos): any => {
        this.datos_user = datos["datos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

    this.form = this.fb.group({
      idioma: ['', Validators.required],
      nivel: ['', Validators.required],
    });

  }


  async onSubmit() {
    
    if (this.form.valid) {

      let data = {
        idioma: this.form.value.idioma,
        nivel: this.form.value.nivel,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/inputidioma',data).subscribe(
        
        (response: any) => {

          //this.route.navigate(['/perfil_usuario'])

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
            title: 'Puede que los datos que ingreso sean incorrectos'
          })

        })
    

    } else {

      console.log("Form error");
    }


  }

}
