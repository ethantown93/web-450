/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatMenuModule, MatToolbarModule, MatRadioModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ErrorInterceptor } from '../error-interceptor';
import { MatDialogModule, MatExpansionModule } from '@angular/material';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { QuizComponent } from './components/quiz/quiz.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CumulativeSummaryComponent } from './components/cumulative-summary/cumulative-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ErrorNotFoundComponent,
    DashboardComponent,
    HomeComponent,
    ErrorHandlerComponent,
    PresentationsComponent,
    QuizComponent,
    SummaryComponent,
    CumulativeSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule, 
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    CarouselModule,
    MatRadioModule
  ],
  providers: [AuthService, AuthGuard,
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorHandlerComponent, SummaryComponent]
})
export class AppModule { }
