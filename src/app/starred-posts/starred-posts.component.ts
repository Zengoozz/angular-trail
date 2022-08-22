import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-starred-posts',
  templateUrl: './starred-posts.component.html',
  styleUrls: ['./starred-posts.component.css']
})
export class StarredPostsComponent implements OnInit {
  starredList: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.starredList = this.postsService.getStarredList();
  }
  clearPosts(): void {
    window.alert(`All starred posts has been removed!`);
    this.postsService.clearStarredList();
  }


}
