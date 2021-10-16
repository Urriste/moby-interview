import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }


  @Output() emitter = new EventEmitter<string>();


  //POSTS SERVICES

  getPosts(){

    const url = `https://jsonplaceholder.typicode.com/posts`;

    return this.http.get(url).pipe(map( (res : any)=>{
      return res
    } ))
  }

  getPost(id:number){

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`

    return this.http.get(url).pipe(map((res:any)=>{
      return res
    }) )

  }

  getComments(id:number){

    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
   

    return this.http.get(url).pipe(map((res:any)=>{

      return res
    }))

  }

}
