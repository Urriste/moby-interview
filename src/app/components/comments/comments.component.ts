import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  @Input() id:any;
  comments:any[] = [];

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    
    
    this.postService.getComments(this.id).subscribe((res)=>{
      console.log("res", res)
      this.comments = res;
    })


  }

}
