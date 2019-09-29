import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/api/login'

  constructor(private http: HttpClient) { }


  login(user: string) {
    console.log(user);
    this.http.post(this.loginUrl, user).subscribe( res => {
      console.log(res);
    })
  }

}
