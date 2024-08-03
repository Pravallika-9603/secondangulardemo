import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http:HttpClient){

  }
  
  saveUser(user:any):Observable<object> { 

    const httpOption={
      headers:new HttpHeaders({

         'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    }

    console.log('service'+JSON.stringify(user));
    return this.http.post("http://localhost:8080/api/saveUser",user,httpOption);
     
  }
}
