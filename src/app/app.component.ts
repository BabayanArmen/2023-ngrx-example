import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FutureState } from './store/store-initial-stae.interface';
import * as PostsActions from './store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGRX';

  constructor(private store: Store<FutureState>) {
    this.store.dispatch(PostsActions.getPostsApi());
  }
}
