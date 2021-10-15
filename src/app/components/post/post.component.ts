import { Component, OnInit } from '@angular/core';
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
  
  constructor(private activeRouter: ActivatedRoute, private postsService:PostsService) { }



  ngOnInit(): void {


    this.activeRouter.snapshot.params.id ? this.id = this.activeRouter.snapshot.params.id : null;

    if(this.id){
      this.postsService.getPost(this.id).subscribe((res)=>{
        this.post = res;
      })
    }

    
  }

}
