import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Posts';
  postsList: Post[] = [];
  subscription: Subscription;
  constructor(private postService: PostsService) {
    this.subscription = this.postService.getPostsList().subscribe((res): void=> {
      for(let i = 0 ; i < res.length; i++){
        const post: Post = res[i];
        post['votes'] = 1;
      }
      this.postsList = res;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  hidePost(post: Post): void {
    this.postsList = this.postsList.filter((p) => p.id !== post.id);
  }
  
  addPost(post:Post):void {
    this.postsList.unshift(post);
  }
}
