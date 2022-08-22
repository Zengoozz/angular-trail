import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter;

  constructor(private postService: PostsService) {
    this.post = {
      id: 1,
      title: '',
      votes: 0,
    };
  }

  ngOnInit(): void {}
  upVote(post: Post): void {
    post.votes ++;
  }
  downVote(post: Post): void {
    post.votes --;
  }
  resetVote(post: Post): void {
    post.votes = 0;
  }
  hide(post: Post):void{
    this.hidePost.emit(post);
    window.alert(`${post.title.toUpperCase()}'s post has been removed.`);
  }
  starPost(post: Post): void {
    this.postService.starPost(post);
    window.alert(`${post.title.toUpperCase()}'s post added!`)
  }
}
