import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicioempresa',
  templateUrl: './inicioempresa.component.html',
  styleUrls: ['./inicioempresa.component.css']
})
export class InicioempresaComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;

  constructor( 
    private fb: FormBuilder, 
    private client: ClientService,
    private route: Router,
    public auth: AuthService, ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      correo: ['', Validators.email],
      contraseña: ['', Validators.required],
    });
  }

  async onSubmit() {

    if (this.form.valid) {

      let data = {
        correo: this.form.value.correo,
        contraseña: this.form.value.contraseña,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/empresa/login', data).subscribe(

        (response: any) => {

          this.route.navigate( ['/perfil_empresa'])

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

          this.auth.setCourrentCorreoempresa(response.correo)

          this.auth.setCourrentidempresa(response.id_user)

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
        }).then(() => {
          this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.route.navigate(['/inicio_empresa']));
        })

        console.log(error.status);

      })


    } else {

      console.log("Form error");
    }


  }

}
