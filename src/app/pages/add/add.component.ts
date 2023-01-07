import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private postService: PostsService, private router: Router) {}

  onAdd(title: string, author: string) {
    this.postService.add({title, author}).subscribe(res => {
      this.router.navigate(['/']);
    })
  };

}
