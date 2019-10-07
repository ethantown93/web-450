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


  public removeAnswer() {
    console.log(this.quiz.quiz.questions.questions_answers)
  }

  constructor(private activeRoute: ActivatedRoute, private auth: AuthService, private http: HttpClient) { 

    this.quizId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
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

  ngOnInit() {
    this.getQuiz()
    console.log(this.quiz.quiz.questions.questions_answers + 'hello')

  }

}
