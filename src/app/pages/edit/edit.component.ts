import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number = this.activatedRoute.snapshot.params['id'];
  public post: Post = {} as Post;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private postService: PostsService) {}

  ngOnInit(): void { 
    this.getData();
   }

  getData() {
    this.postService.getById(this.id).subscribe(res => {
      this.post = res as Post;
    })
  }

  onEdit() {
    this.postService.edit(this.post).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
