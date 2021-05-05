import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav3',
  templateUrl: './nav3.component.html',
  styleUrls: ['./nav3.component.css']
})
export class Nav3Component implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

}
