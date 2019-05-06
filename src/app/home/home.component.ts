import { Comment } from './../model/comment.model';
import { CommentService } from './../service/comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private comments: Comment;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getComments('LL');
  }

  getComments(idComment :string) {
    
    this.commentService.getComments(idComment).subscribe(
      res=>this.comments=res);
  }

}
