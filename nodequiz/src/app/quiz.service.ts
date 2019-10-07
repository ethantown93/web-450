/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Injectable } from '@angular/core';

// import { HttpCleint } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  quizData = [
    {
      id: '101',
      title: 'Intruduction to Javascript',
      description: "Learn the basics of Javascript that you'll need for front-end and back-end development.",
      images: [
        {
          image: 'js1.jpg'
        }
      ]
    },
    {
      id: '102',
      title: "REST",
      description: "Learn the fundamentals of REST, and why it might be a smart choice for you."
    },
    {
      id: '103',
      title: 'The Two-Pizza Rule & Coninuous Integration',
      description: "Learn what the two-pizza and Continuous integration is, and why incorporating them into your DevOps practices might be beneficial."
    }
  ];


  getQuizzes() {
    return this.quizData
  }

}
