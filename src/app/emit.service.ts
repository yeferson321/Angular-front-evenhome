import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  institucion$ = new EventEmitter<Array<any>>();
  
  constructor() {
  }
}
