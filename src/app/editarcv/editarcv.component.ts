import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarcv',
  templateUrl: './editarcv.component.html',
  styleUrls: ['./editarcv.component.css']
})
export class EditarcvComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;
  modal: boolean = true;
  Funciones: boolean = false;
  Experiencias: boolean = false;
  Formacion: boolean = false;

  Conocimientos: boolean = false;
  datos_user;
  datos;

  constructor(private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService,) { }

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
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
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
      
      //cargo: ['', Validators.required],
      
      //empresa: ['', Validators.required],
      //funcion: ['', Validators.required],
      //area: ['', Validators.required],
      //logros: ['', Validators.required],

      //centro: ['', Validators.required],
      //nivelestudio: ['', Validators.required],
      //especialidad: ['', Validators.required],
      //estado: ['', Validators.required],

      //conocimientos: ['', Validators.required],
      //conocimientosescritos: ['', Validators.required],

      //hojavida: ['', Validators.required],

    });
  }

  async onSubmit() {

    if (this.form.valid) {

      let data = {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        genero: this.form.value.genero,
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
        //cargo: this.form.value.cargo,
        //empresa: this.form.value.empresa,
        //funcion: this.form.value.funcion,
        //area: this.form.value.area,
        //logros: this.form.value.logros,
        //idiomas: this.form.value.idiomas,
        //nivel: this.form.value.nivel,
        //centro: this.form.value.centro,
        //nivelestudio: this.form.value.nivelestudio,
        //especialidad: this.form.value.especialidad,
        //estado: this.form.value.estado,
        //conocimientos: this.form.value.conocimientos,
        //conocimientosescritos: this.form.value.conocimientosescritos,
        //hojavida: this.form.value.hojavida,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/editarvc', data).subscribe(

        (response: any) => {

          this.route.navigate( ['/perfil_usuario'])

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
