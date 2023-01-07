import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getById(id: number) {
    return this.http.get('http://localhost:3000/posts'+'/'+id);
  }

  add(post: Post): Observable<any> {
    return this.http.post('http://localhost:3000/posts', post);
  }

  edit(post: Post): Observable<any> {
    return this.http.put('http://localhost:3000/posts'+'/'+post.id, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/posts'+'/'+id);
  }
}
