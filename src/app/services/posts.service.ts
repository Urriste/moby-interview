import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

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
    console.log("al servicio llegó")

    return this.http.get(url).pipe(map((res:any)=>{
      console.log("res desde el servicio",res)
      return res
    }))

  }

}
