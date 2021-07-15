import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';
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
  id_user;

  cursos;
  data;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,) { }


  eliminarDatos(id_idioma) {

    this.client.deleteRequestEliminar('http://localhost:5000/api/v01/user/borraridioma', id_idioma).subscribe(

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
          title: 'Dato eliminado'
        }).then(() => {
          this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.route.navigate(['/editar_cv']));
        })

      }
    )
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      idioma: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.id_user = localStorage.getItem("id_user")

    this.client.getRequestdatosvc('http://localhost:5000/api/v01/user/datosidioma', this.id_user, localStorage.getItem('token')).subscribe(

      (data): any => {

        this.datos_user = data["data"]

        console.log(data);

      }, (error) => {

        console.log(error);

      }

    )

  }


  async onSubmit() {

    if (this.form.valid) {

      this.id_user = localStorage.getItem("id_user")

      let data = {
        idioma: this.form.value.idioma,
        nivel: this.form.value.nivel,
        id: this.id_user
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/inputidioma', data).subscribe(

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
            title: 'Datos guardados'
          }).then(() => {
            this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
              this.route.navigate(['/editar_cv']));
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
              this.route.navigate(['/editar_cv']));
          })

          console.log(error.status);

        })

    } else {

      console.log("Form error");
    }


  }

}
