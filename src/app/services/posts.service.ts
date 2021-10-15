import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts(){

    const url = `https://jsonplaceholder.typicode.com/posts`;

    return this.http.get(url).pipe(map( (res : any)=>{
      return res
    } ))



  }
}
