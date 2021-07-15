import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfilempresa',
  templateUrl: './perfilempresa.component.html',
  styleUrls: ['./perfilempresa.component.css']
})
export class PerfilempresaComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;
  modal: boolean = false;
  datos_user;
  datos;

  datos_anuncios;
  data;

  id_user;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService
  ) { }

  
  eliminarDatos(id_anuncio) {

    this.client.deleteRequestEliminar('http://localhost:5000/api/v01/detele/anuncio', id_anuncio).subscribe(

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
            this.route.navigate(['perfil_empresa']));
        })

      }
    )
  }
  

  ngOnInit(): void {

    this.client.getRequestdatos_user('http://localhost:5000/api/v01/datos/empresa', localStorage.getItem('token')).subscribe(

      (datos): any => {
        this.datos_user = datos["datos"]

        console.log(datos);

      }, (error) => {

        console.log(error);

      }

    )

    this.id_user = localStorage.getItem("id_user")

    this.client.getRequestdatosvc('http://localhost:5000/api/v01/datos/anuncios', this.id_user, localStorage.getItem('token')).subscribe(

      (data): any => {
        this.datos_anuncios = data["data"]

        console.log(data);

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
