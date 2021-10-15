import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [

  {
    path:"posts",
    component: PostsComponent
  },
  {
    path:"post/:id",
    component: PostComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"posts"
    
  },
  {
    path:"**",
    pathMatch:"full",
    component:ErrorComponent
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
