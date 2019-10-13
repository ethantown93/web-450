/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-cumulative-summary',
  templateUrl: './cumulative-summary.component.html',
  styleUrls: ['./cumulative-summary.component.css']
})
export class CumulativeSummaryComponent implements OnInit {

  employeeId: any;
  results: any= {};

  constructor(private auth: AuthService) { 


  }

  ngOnInit() {
 
    this.getUser()

    this.auth.getResults(this.employeeId).subscribe( res => {
      if(res) {
        this.results = res;
        console.log(this.results)
      }
    })
  }

  getUser() {
    this.employeeId = localStorage.getItem('user');
    console.log(this.employeeId);
  }


}
