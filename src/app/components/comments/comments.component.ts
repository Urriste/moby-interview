import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  @Input() id?:number;

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
 
    if(this.id){
     
    
      this.postService.getPostComments(this.id).subscribe((res)=>{
        console.log("comments res",res)
      })

    }


  }

}
