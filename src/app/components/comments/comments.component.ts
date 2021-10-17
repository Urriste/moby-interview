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
  newComment:any;

  constructor(private postService:PostsService) { }

  ngOnInit(): void {

    this.postService.addComment.subscribe((res)=>{
      
  
      this.newComment = {
        name:res.name,
        email: res.email,
        body: res.comment,
        isAdded: true,
        id: this.comments.length + 1
      }

      
      this.comments.push(this.newComment);
    })
    
    this.postService.getComments(this.id).subscribe((res)=>{
      
      this.comments = res;
    })


  }

  deleteComment(comment:any){
    
   this.comments = this.comments.filter((item)=>{
    
      return item.id !== comment.id

    })

  }

  emit(){

    let date = new Date();
    let fullDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    this.postService.emitDate.emit(fullDate);


    
  }


}
