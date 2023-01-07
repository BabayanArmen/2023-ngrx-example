import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>('http://localhost:3000/posts'+'/'+id);
  }

  add(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }

  edit(post: Post): Observable<Post> {
    return this.http.put<Post>('http://localhost:3000/posts' + '/' + post.id, post);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>('http://localhost:3000/posts'+'/'+id);
  }
}
