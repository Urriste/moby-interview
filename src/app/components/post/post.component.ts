
import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    post = new Post;
   id?:number;
   fullDate:string = "";
   newComment:any;


   
  
  constructor(private activeRouter: ActivatedRoute, private postsService:PostsService) { }



  ngOnInit(): void {

 

      this.postsService.emitDate.subscribe((res)=>{
        console.log("Recibiendo la data desde los comentarios",res)
        this.fullDate = res;
      })

    this.activeRouter.snapshot.params.id ? this.id = this.activeRouter.snapshot.params.id : null;

    if(this.id){
      this.postsService.getPost(this.id).subscribe((res)=>{
        console.log(res)
        this.post = res;
      })
    }

    
  }

  

}
