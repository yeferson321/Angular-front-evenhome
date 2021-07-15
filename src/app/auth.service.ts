import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //el BehaviorSubject que nos permitirá guardar el estado de login
  //tendrá un estado inicial booleano según lo que retorne checkToken
  isLogin = new BehaviorSubject<boolean>(this.checkToken());
  isLoginAdmin = new BehaviorSubject<boolean>(this.checkToken());

  //el BehaviorSubject que nos permitirá saber si somos admin o no
  admin = new BehaviorSubject<boolean>(null);
  user = new BehaviorSubject<boolean>(null);
  //guarda = new BehaviorSubject<boolean>(null);

  //método que nos permitirá chequear si existe un token, en tal
  //caso retornará true
  private checkToken(): boolean {
    return !!localStorage.getItem('token');
  }

  //método que nos permite establecer el token en el almacenamiento local
  //y enviar una señal del BehaviorSubject para establecer su nuevo valor en
  //true para indicar que estamos logueados
  login(token: string): void {

    localStorage.setItem('token', token);
    this.user.next(true);
    this.isLogin.next(true);
  }

  loginAdmin(token: string): void {

    localStorage.setItem('token', token);
    this.admin.next(true);
    this.isLoginAdmin.next(true);
  }

  //método que nos permite establecer el nombre del usuario
  setCourrentUser(nombre: string): void {
    localStorage.setItem('courrentUser', nombre);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentUser(): string {
    return localStorage.getItem('courrentUser');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentUser(): void {
    localStorage.removeItem('courrentUser');
  }

  setCourrentApellidos(apellidos: string): void {
    localStorage.setItem('courrentApellidos', apellidos);
  }

  //método que nos permite recuperar el apellido del usuario
  getCourrentApellidos(): string {
    return localStorage.getItem('courrentApellidos');
  }

  //método que nos permite eliminar el apellido de usuario
  private deleteCourrentApellidos(): void {
    localStorage.removeItem('courrentApellidos');
  }

  //método que nos permite establecer el nombre del usuario
  setCourrentCorreo(correo: string): void {
    localStorage.setItem('courrentCorreo', correo);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentCorreo(): string {
    return localStorage.getItem('courrentCorreo');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentCorreo(): void {
    localStorage.removeItem('courrentCorreo');
  }

  //método que nos permite establecer el nombre del usuario
  setCourrentidUser(id_user: string): void {
    localStorage.setItem('id_user', id_user);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentidUser(): string {
    return localStorage.getItem('id_user');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentidUser(): void {
    localStorage.removeItem('id_user');
  }

  //-------------------------empresa------------------------------------

  //método que nos permite establecer el nombre del usuario
  setCourrentUserempresa(nombre: string): void {
    localStorage.setItem('courrentUser', nombre);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentUserempresa(): string {
    return localStorage.getItem('courrentUser');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentUserempresa(): void {
    localStorage.removeItem('courrentUser');
  }

  //método que nos permite establecer el nombre del usuario
  setCourrentCorreoempresa(correo: string): void {
    localStorage.setItem('courrentCorreo', correo);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentCorreoempresa(): string {
    return localStorage.getItem('courrentCorreo');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentCorreoempresa(): void {
    localStorage.removeItem('courrentCorreo');
  }

  //método que nos permite establecer el nombre del usuario
  setCourrentidempresa(id_user: string): void {
    localStorage.setItem('id_user', id_user);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentidempresa(): string {
    return localStorage.getItem('id_user');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentidempresa(): void {
    localStorage.removeItem('id_user');
  }

  //método que nos permite romover el token almacenado y el nombre del
  //usuario actual y enviar una señal al BehaviorSubject para establecer
  //su nuevo valor, en este caso false para indicar que no estamos logueados
  logout(): void {
    localStorage.removeItem('token');
    this.deleteCourrentUser();
    this.deleteCourrentCorreo();
    this.deleteCourrentApellidos();
    this.deleteCourrentidUser();

    this.user.next(false);
    this.isLogin.next(false);
  }

  logoutAdmin(): void {
    localStorage.removeItem('token');
    this.deleteCourrentUserempresa();
    this.deleteCourrentCorreoempresa();
    this.deleteCourrentidempresa();

    this.admin.next(false);
    this.isLoginAdmin.next(false);
  }

  //método que nos retorna el BehaviorSubject cómo un observable
  isLoggedIn(): Observable<boolean> {
    return this.isLogin.asObservable();
  }

  isLoggedInAdmin(): Observable<boolean> {
    return this.isLoginAdmin.asObservable();
  }

  isAdmin(): Observable<boolean> {
    return this.admin.asObservable();
  }

  //setRol(Rol) {
  //  this.admin.next(Rol);
  //}

  //getRol(): string {
  //  return localStorage.getItem('Rol');
  //}

  //private deleteRol(): void {
  //  localStorage.removeItem('Rol')
  //}

}
