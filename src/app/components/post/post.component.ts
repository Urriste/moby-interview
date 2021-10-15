import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  
   id?:number;
  
  constructor(private activeRouter: ActivatedRoute) { }



  ngOnInit(): void {


    this.activeRouter.snapshot.params.id ? this.id = this.activeRouter.snapshot.params.id : null;

    
  }

}
