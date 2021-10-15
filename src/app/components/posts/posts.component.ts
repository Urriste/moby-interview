import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:any[] = [];

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res:any)=>{
      console.log(res.slice(0,10))
      this.posts = res.slice(0,10)
    });
  }

}
