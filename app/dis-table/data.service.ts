import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface data{
    userId:number,
    id:number,
    title: string,
    completed:string
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

getUsers():Observable<any>{
    //return this.http.get('https://jsonplaceholder.typicode.com/users');

   return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
 // getData() : Promise<any>{
   // return this.http.get('https://jsonplaceholder.typicode.com/todos').
   // toPromise();
    //https://jsonplaceholder.typicode.com/todos
 // }
}