import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navempresa1',
  templateUrl: './navempresa1.component.html',
  styleUrls: ['./navempresa1.component.css']
})
export class Navempresa1Component implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

}
