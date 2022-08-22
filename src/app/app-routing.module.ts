import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { StarredPostsComponent } from './starred-posts/starred-posts.component';

const routes: Routes = [
  {path: "", component: PostsComponent},
  {path:"about", component: AboutComponent},
  {path:"starredPosts", component: StarredPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
