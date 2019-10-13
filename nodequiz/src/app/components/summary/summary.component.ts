/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  employeeId: any;
  score: any;
  summaryScore: any;
  message: any;

  constructor(private router: Router, public dialogRef: MatDialogRef<SummaryComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { 


  }

  getScore() {
    this.score = localStorage.getItem('score');
  }

  onClose() {
    localStorage.removeItem('score')
    this.dialogRef.close();
    this.router.navigate(['/cumulative-summary'])
  }

  ngOnInit() {
    this.getScore();
  }

}
