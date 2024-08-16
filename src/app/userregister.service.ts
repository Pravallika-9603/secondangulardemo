import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  userNameBehaviour=new BehaviorSubject<string>('Ashri');

  emitName(name:any):void{
    this.userNameBehaviour.next(name);
  }

  constructor(private http:HttpClient){

  }

  learnObservable(userDetails: { name: string; email: string; address: string; mobile: string; age: null; gender: string; }): Observable<String>{
    return new Observable<String>(Observer=>{
      console.log("Executed");
      setTimeout(()=>Observer.next('Neoteric'),6000);
    }
    );
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
