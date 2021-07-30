import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string = environment.apiUrl;
  constructor(private http: HttpClient ) { }
  onLogin(){
    return this.http.get(`${this.apiUrl}/get_suc.php`);
  }

  
}
