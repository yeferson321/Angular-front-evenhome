import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarimg',
  templateUrl: './editarimg.component.html',
  styleUrls: ['./editarimg.component.css']
})
export class EditarimgComponent implements OnInit {

  load: boolean = true;
  form: any = FormGroup;
  Idiomas: boolean = false;
  submitted = false;
  datos_user;
  datos;
  id_user;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      hojavida: [this.datos],
      pdfword: [''],
    });

    this.id_user = localStorage.getItem("id_user")

    this.client.getRequestdatosvc('http://localhost:5000/api/v01/user/datoshojadevida', this.id_user, localStorage.getItem('token')).subscribe(

      (datos): any => {

        this.datos_user = datos["datos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )
  }

  upload(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      pdfword: file
    });
    this.form.get('pdfword').updateValueAndValidity()
  }

  async onSubmit() {
    this.submitted = true;

    if (this.form.valid) {

      this.id_user = localStorage.getItem("id_user")

      var formData: any = new FormData();

      formData.append("hojavida", this.form.get('hojavida').value);
      formData.append("pdfword", this.form.get('pdfword').value);
      formData.append("id", this.id_user);

      this.load = false;
      this.client.postRequestSendForm('http://localhost:5000/api/v01/user/inputhojadevida', formData).subscribe(

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
