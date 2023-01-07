import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FutureState } from 'src/app/store/store-initial-stae.interface';
import { PostsService } from '../../services/posts.service';
import * as PostsActions from '../../store/actions/post.actions';
import * as PostsSelector from '../../store/selectors/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts$ = this.store.select(PostsSelector.slectAllPosts);
  
  constructor(private store: Store<FutureState>) {}

  ngOnInit(): void { }

  onDelete(id: number) {
    this.store.dispatch(PostsActions.deletePostApi({id}));
  }

}
