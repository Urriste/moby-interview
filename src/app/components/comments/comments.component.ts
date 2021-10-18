import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

  

  @Input() id:any;
  comments:any[] = [];
  newComment:any;
  dataForm!:FormGroup;

  constructor(private postService:PostsService,private activeRouter: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    




    this.getComments()
   
    this.initForm()
    

  }



  deleteComment(comment:any){
    
   this.comments = this.comments.filter((item)=>{
    
      return item.id !== comment.id

    })
    localStorage.setItem(`comments/${this.comments[0].postId}`, JSON.stringify(this.comments))
   
    

  }

  emit(){

    let date = new Date();
    let fullDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    this.postService.emitDate.emit(fullDate);
    
  }

 

  
  submit(){
    if(this.dataForm.valid){
          
    
    this.newComment ={
      name:this.dataForm.value.name,
      email:this.dataForm.value.email,
      body:this.dataForm.value.comment,
      id: this.comments[this.comments.length -1].id + 1,
      postId:this.activeRouter.snapshot.params.id,
      isAdded:true
    }

    if(this.newComment.body.length > 500){
      alert("Ingresaste más de 500 caracteres")
    }else{

      this.comments.push(this.newComment)
      localStorage.setItem(`comments/${this.newComment.postId}`, JSON.stringify(this.comments))
      }
    }

  }


  initForm(){
      this.dataForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.compose([Validators.required,Validators.email])],
        comment: ["",Validators.required]
      })

  }

  


  getComments(){
    this.postService.getComments(this.id).subscribe((res)=>{      
     
      if(localStorage.getItem(`comments/${res[0].postId}`)){

        let localStorageComments = JSON.parse(localStorage.getItem(`comments/${res[0].postId}`) || "")

        if(localStorageComments !== ""){
          this.comments = localStorageComments;
        }

      }else{
        this.comments = res;
      }
        
    })
  }


}



