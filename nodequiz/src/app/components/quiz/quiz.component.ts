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
  // quizQuestions: any = [];
  q: any = [];
  a: any = [];
  question: any;
  questions: any;
  score: any = 0;
  employeeId: any;

  constructor(private activeRoute: ActivatedRoute, private auth: AuthService, private http: HttpClient) {

    this.quizId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
    
    this.auth.getQuiz(this.quizId).subscribe(
      res => {
        this.quiz = res;

        // this.test()
        
        // console.log(this.quizQuestions)
        console.log(this.quiz.quiz)
        

      },
      err => console.log(err)
    )
    
  }

  
  // test() {
  //   for(let i = 0; i < this.quiz.quiz.questions.length; i++){
  //     this.quizQuestions.push(this.quiz.quiz.questions[i])
  //   }
  // }

  quizForm(form) {
    this.q = form;
    this.q['employeeId'] = this.employeeId;
    this.q['quizId'] = this.quizId;
    console.log(this.q)
    }

  getUser() {
    this.employeeId = localStorage.getItem('user');
    console.log(this.employeeId);
  }

  ngOnInit() {
    this.getUser()
  }

}
