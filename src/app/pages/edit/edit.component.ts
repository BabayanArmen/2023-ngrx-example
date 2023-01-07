import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { FutureState } from 'src/app/store/store-initial-stae.interface';
import * as PostsActions from '../../store/actions/post.actions';
import * as PostsSelector from '../../store/selectors/posts.selectors';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  id: number = this.activatedRoute.snapshot.params['id'];
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public post$ = this.store.select(PostsSelector.selectPostById);

  public form: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
  });

  constructor(
    private actions: Actions,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private store: Store<FutureState>) {}

  ngOnInit(): void { 
    this.store.dispatch(PostsActions.getPostByIdApi({id: this.id}));

    this.post$
    .pipe(
      takeUntil(this.destroyed$)
    )
    .subscribe((res) => {
      this.form.patchValue(res as Post)
    });

    // this.actions.pipe(
    //   ofType(PostsActions.getPostByIdSuccess),
    //   takeUntil(this.destroyed$)
    // )
    // .subscribe(() => {
    //   this.post$.subscribe((res) => {
    //     this.form.patchValue(res as Post);
    //   })
    // });

   };

  onEdit() {
    this.store.dispatch(PostsActions.editPostApi({post: this.form.value}));
    this.router.navigate(['/']);
  };

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  };

}
