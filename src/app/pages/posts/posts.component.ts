import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.get().subscribe(res => {
      this.posts = res as any[]
    });
  }

  onDelete(id: number) {
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(el => el.id !== id);
    });
  }

}
