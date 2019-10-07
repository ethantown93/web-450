/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'http://localhost:3000/api/login'
  private quizUrl = 'http://localhost:3000/api/quiz/'

  constructor(private http: HttpClient, private router : Router) { }

  login(user) {

    return this.http.post<any>(this.loginUrl, user)
  }

  getQuiz(quizId) {
    console.log(quizId);
    return this.http.get<any>(this.quizUrl + quizId);
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
