import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  /* Method for Creating Records After Registration */
  postCustomer(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/customers",data);  
  }

  /* Method for Getting Customers Data for Login  */
  getCustomer():Observable<any>{
    return this.http.get("http://localhost:3000/customers");
  }
}
