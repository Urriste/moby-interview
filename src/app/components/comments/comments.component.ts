import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
      console.log(this.id);
      
      localStorage.setItem(`comments/${this.comments[0].postId}`, JSON.stringify(this.comments))
    })


    this.postService.getComments(this.id).subscribe((res)=>{      
   

    if(localStorage.getItem(`comments/${res[0].postId}`)){
      
      this.comments = JSON.parse(localStorage.getItem(`comments/${res[0].postId}`) || "{}")

    }else{
       
      this.comments = res;
      localStorage.setItem(`comments/${this.comments[0].postId}`, JSON.stringify(this.comments)) 
    }
     
    
    
    })
    

  }

  deleteComment(comment:any){
    
   this.comments = this.comments.filter((item)=>{
    
      return item.id !== comment.id

    })

    console.log(this.id)
    localStorage.setItem(`comments/${this.comments[0].postId}`, JSON.stringify(this.comments))


  }

  emit(){

    let date = new Date();
    let fullDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    this.postService.emitDate.emit(fullDate);


    
  }


}
