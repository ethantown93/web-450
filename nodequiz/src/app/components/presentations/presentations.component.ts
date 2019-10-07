/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentationId: number;
  presentation: Array<any> = [];

  javascript: Array<any> = [];
  rest: Array<any> = [];
  tc: Array<any> = [];
  
  constructor(private activeRoute: ActivatedRoute, private quizService: QuizService) { 

    this.javascript = [
      { name: './assets/images/js1.JPG' }, { name: './assets/images/js2.JPG' }, { name: './assets/images/js3.JPG' }, { name: './assets/images/js4.JPG' }, { name: './assets/images/js5.JPG' }, { name: './assets/images/js6.JPG' }, { name: './assets/images/js7.JPG' }, { name: './assets/images/js8.JPG' }, { name: './assets/images/js9.JPG' }, { name: './assets/images/js10.JPG' }, { name: './assets/images/js11.JPG' }, { name: './assets/images/js12.JPG' },]
      
      this.rest = [
        { name: './assets/images/rest1.JPG' }, { name: './assets/images/rest2.JPG' }, { name: './assets/images/rest3.JPG' }, { name: './assets/images/rest4.JPG' }, { name: './assets/images/rest5.JPG' }, { name: './assets/images/rest6.JPG' }, { name: './assets/images/rest7.JPG' }, { name: './assets/images/rest8.JPG' }, { name: './assets/images/rest9.JPG' }, { name: './assets/images/rest10.JPG' }, { name: './assets/images/rest11.JPG' }, { name: './assets/images/rest12.JPG' },
      ]

      this.tc = [
        { name: './assets/images/tc1.JPG '}, { name: './assets/images/tc2.JPG '}, { name: './assets/images/tc3.JPG '}, { name: './assets/images/tc4.JPG '}, { name: './assets/images/tc5.JPG '}, { name: './assets/images/tc6.JPG '}, { name: './assets/images/tc7.JPG '}, { name: './assets/images/tc8.JPG '}, { name: './assets/images/tc9.JPG '}, { name: './assets/images/tc10.JPG '}, { name: './assets/images/tc11.JPG '}, { name: './assets/images/tc12.JPG '},
      ]

    this.presentationId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))  

  }

  newArray() {
    console.log(this.presentationId)
    if(this.presentationId === 101) {
      this.presentation = [...this.javascript]
    } if(this.presentationId === 102) {
      this.presentation = [...this.rest]
    } if(this.presentationId === 103) {
      this.presentation = [...this.tc]
      console.log(this.presentation);

    } else {
      return;
    }
  }

  

  ngOnInit() {
    this.newArray()
  }
}
