import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-editarhabilidades',
  templateUrl: './editarhabilidades.component.html',
  styleUrls: ['./editarhabilidades.component.css']
})
export class EditarhabilidadesComponent implements OnInit {

  load: boolean = true;
  form: any = FormGroup;
  modal: boolean = true;
  Conocimientos: boolean = false;
  datos_user;
  datos;
  id_user;

  constructor(private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService,) { }

  ngOnInit(): void {

    this.form = this.fb.group({

      conocimientosescritos: ['', Validators.required],

    });

    this.id_user = localStorage.getItem("id_user")

    this.client.getRequestdatosvc('http://localhost:5000/api/v01/user/datosconocimientos', this.id_user, localStorage.getItem('token')).subscribe(

      (datos): any => {

        this.datos_user = datos["datos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

  }

  async onSubmit() {

    if (this.form.valid) {


      let data = {

        conocimientosescritos: this.form.value.conocimientosescritos,
        id: this.id_user

      }

      this.load = false;

      this.id_user = localStorage.getItem("id_user")

      this.client.postRequest('http://localhost:5000/api/v01/user/inputconocimientos', data).subscribe(

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
