import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  form: any = FormGroup;
  load: boolean = true;
  habilidad: string = "";

  constructor(    
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService,
    public auth: AuthService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      palabra: ['', Validators.required],
    });
  }

  consultarDatos() {

    console.log(this.form.value.palabra)

    let data = {
      palabra: this.form.value.palabra,
      habilidad: this.habilidad
    }

    this.client.getRequestdatos('http://localhost:5000/api/v01/consulta/anuncios', data).subscribe(

      (response: any) => {
        this.route.navigate( ['/empleo'])
      }

    )
  }

}
