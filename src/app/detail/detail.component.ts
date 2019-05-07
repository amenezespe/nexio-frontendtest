import { CommentService } from './../service/comment.service';
import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Comment } from './../model/comment.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  
  @Output() comment: Comment={};


  
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  saveComment() {
    console.log('entrei');
    this.commentService.saveComments(this.comment);
  }

  remove (id : number){
    this.commentService.deleteComment(this.comment.id);
  }

 

}
