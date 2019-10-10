/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: number;
  quiz: any;
  q: any = [];
  question: any = [];


  constructor(private activeRoute: ActivatedRoute, private auth: AuthService, private http: HttpClient) {

    this.quizId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
    this.getQuiz()

  }

  getQuiz() {
    this.auth.getQuiz(this.quizId).subscribe(
      res => {
        this.quiz = res;
        console.log(this.quiz);
      },
      err => console.log(err)
    )
  }

  quizForm(form) {
    this.q = form;
    console.log(this.q)
  }

  ngOnInit() {

  }

}