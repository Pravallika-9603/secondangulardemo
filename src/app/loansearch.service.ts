import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/Account';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private httpClient:HttpClient){

    }   

    searchAccount(accountnumber:any) : Observable<any>{

      const httpHeaders = {
        headers:new HttpHeaders({
          'accountnumber':accountnumber,
          'Content-Type':'application/json',
          'Accept':'application/json'
        })
       };
      console.log(httpHeaders.headers.get(accountnumber));
       return this.httpClient.get('http://localhost:8080/api/searchAccount',httpHeaders);
    
    }

   }
   

