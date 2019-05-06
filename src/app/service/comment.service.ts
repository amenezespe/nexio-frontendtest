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

}