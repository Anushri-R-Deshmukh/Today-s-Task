import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Userdata } from './reactive-form/user.module';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
base_Url ="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  //http Options
  httpOptions={
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  }

  //handler Api Error 
  handlerError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.log('An error occureed:', error.error.message);
    }else{
      console.error(`backend return code $(error.status),` + 
      `body was: $(error.error)`);
    }
    return throwError(
      'Something Bad happen; please try later.');
  }
 
  //create item with post method
 createItem(item:any):Observable<Userdata>{
  return this.http.post<Userdata>(this.base_Url,JSON.stringify(item),this.httpOptions)
  .pipe(retry(2),catchError(this.handlerError));
  }

  //get all user data
  getList():Observable<Userdata>{
    return this.http.get<Userdata>(this.base_Url).pipe(retry(2), catchError(this.handlerError))
    }

    //update data by id
    updateItem(id:string, item:any):Observable<Userdata>{
      return this.http
      .put<Userdata>(this.base_Url + '/' +id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handlerError) )
    }


    //delete by id
    deleteItem(id:string){
      return this.http.delete<Userdata>(this.base_Url + '/' +id, this.httpOptions)
      .pipe(retry(2), catchError(this.handlerError))
    }
}







function retry(arg0: number): import("rxjs").OperatorFunction<Userdata, unknown> {
  throw new Error('Function not implemented.');
}

function catchError(handlerError: (error: HttpErrorResponse) => Observable<never>): import("rxjs").OperatorFunction<unknown, Userdata> {
  throw new Error('Function not implemented.');
}

