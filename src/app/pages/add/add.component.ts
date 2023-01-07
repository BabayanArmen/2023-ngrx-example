import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { FutureState } from 'src/app/store/store-initial-stae.interface';
import * as PostsActions from '../../store/actions/post.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  public post: Post = {} as Post;

  constructor(
    private strore: Store<FutureState>,
    private router: Router) {}

  onAdd() {
    this.strore.dispatch(PostsActions.addPostApi({post: this.post}));
    this.router.navigate(['/']);
  };

}
