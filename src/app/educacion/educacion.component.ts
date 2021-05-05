import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  cursos;
  data;

  constructor(public client: ClientService) { }

  pedirCursos() {
  
    this.client.getRequestAllCursos('http://localhost:5000/api/v01/user/cursos').subscribe(
     
      (data): any => {
        this.cursos = data["data"]
    
        console.log(data);
      } 
    )
  }

  ngOnInit(): void {
    this.pedirCursos()
  }

}
