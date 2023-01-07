import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  public post: Post = {} as Post;

  constructor(private postService: PostsService, private router: Router) {}

  onAdd() {
    this.postService.add(this.post).subscribe(res => {
      this.router.navigate(['/']);
    })
  };

}
