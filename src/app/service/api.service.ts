import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  /* Method for Getting Product data from the Database */
  getProduct():Observable<any>{
    return this.http.get<any>("http://localhost:3000/productsitems")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  /*Fake API 
  https://fakestoreapi.com/products  */

}
