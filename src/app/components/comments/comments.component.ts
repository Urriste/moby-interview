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
      
      this.comments = res;
    })


  }

  emit(){

    let date = new Date();
    let fullDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    


    this.postService.emitter.emit(fullDate);


    
  }


}
