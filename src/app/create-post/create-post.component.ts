import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = '';
  @Output() addPost: EventEmitter<Post> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const post: Post ={
      id: Date.now(),
      title: this.title,
      votes: 1,
    }
    this.addPost.emit(post);

    this.title ='';
  }

}
