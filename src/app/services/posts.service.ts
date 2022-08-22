import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  starredPosts: Post[] = [];
  constructor(private http: HttpClient) {}
  getPostsList(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=8');
  }
  getStarredList(): Post[] {
    return this.starredPosts;
  }
  starPost(post: Post): void {  
    this.starredPosts.push(post);
  }
  clearStarredList(): void {
    location.reload();
    this.starredPosts = [];
  }
}
