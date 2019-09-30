/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'http://localhost:3000/api/login'

  constructor(private http: HttpClient, private router : Router) { }



  logout() {

  }

  login(user) {

    return this.http.post<any>(this.loginUrl, user) 
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
