/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 
import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quizzes: any[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizzes = this.quizService.getQuizzes();
  }

  

}
