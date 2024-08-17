import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = 'http://localhost:5282'
  constructor(private http: HttpClient) {}

  sendCredentials(email:string, password:string): Observable <any>{
    const body = {
      "email_address": email,
      "user_password": password
    }
    return this.http.post(`${this.URL}/auth`, body)
  }

}
