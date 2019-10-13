/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CumulativeSummaryComponent } from './components/cumulative-summary/cumulative-summary.component';

const routes : Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'presentation/:id', component: PresentationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'summary/:id/:score', component: SummaryComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'cumulative-summary', component: CumulativeSummaryComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'quiz/:id', component: QuizComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404', component: ErrorNotFoundComponent
  },
  {
    path: "**", redirectTo: '/404'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
