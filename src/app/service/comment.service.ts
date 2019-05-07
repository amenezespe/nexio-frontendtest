import { Comment } from './../model/comment.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable}     from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class CommentService {
    private apiRoot = 'http://localhost:8080/post';
    
   constructor(private http: HttpClient){}


  getComments(idComment: string) : Observable<Comment>{
        
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
 
    return this.http.get(this.apiRoot.concat('/'+ idComment + '/comments'), {headers: headers});
  }

  saveComments(comment: Comment) : Observable<Comment>{
    
     let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     console.log(comment);
     //return this.http.post(this.apiRoot.concat('/'+ comment.idComment + '/comment'), comment, {headers: headers});

     return this.http.post<Comment>(this.apiRoot.concat('/'+ comment.idComment + '/comment'), comment, {headers: headers});
  
  }

  deleteComment(id: number) : Observable<Comment>{
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.delete(this.apiRoot.concat('/'+ id + '/comments'), {headers: headers});
  }
  




}