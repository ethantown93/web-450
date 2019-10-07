/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorHandlerComponent } from './app/components/error-handler/error-handler.component';

@Injectable()   

export class ErrorInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'Please Try Again.'
                if(error.error.message) {
                    errorMessage = error.error.message;
                }
                this.dialog.open(ErrorHandlerComponent, {data: {message: errorMessage }});
                return throwError(error);
            })
        )
    }
}