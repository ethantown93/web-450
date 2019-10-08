/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private auth: AuthService, private router: Router, private http: HttpClient) { }

  loginUser() { 
    this.auth.login(this.loginUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

}