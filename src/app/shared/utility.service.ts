import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  registrationDetails:any=[];
  loginUser:any;
  userName:any;
  getAllUsers=[]
  isLoggedIn=false;
  headers: HttpHeaders
  constructor( private http: HttpClient) { }

  getLoginInfo(username,pwd){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post("https://reqres.in/api/login",{
      "email": username,
      "password": pwd
  }, {
      headers:headers
    });
  }
}
