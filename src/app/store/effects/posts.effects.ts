import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import * as PostActions from '../actions/post.actions';
import { catchError, EMPTY, map, mergeMap, Observable } from "rxjs";
import { Post } from "src/app/models/post.model";


@Injectable()
export class PostsEffects {

    constructor(
        private actions$: Actions,
        private postsService: PostsService,
    ) {}

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.getPostsApi),
        mergeMap(() => this.postsService.getPosts()
        .pipe(
            map((data: Post[]) => {
                return PostActions.getPostsSuccess({posts: data});
            }),
            // mergeMap((data: Post[]) => {
            //     return [PostActions.getPostsSuccess({posts: data})];
            // }),
            catchError((error) => EMPTY)
            )
        )
    ));

    getById$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.getPostByIdApi),
        mergeMap(({id}) => this.postsService.getById(id)
        .pipe(
            map((data: Post) => {
                return PostActions.getPostByIdSuccess(({post: data}))
            }),
            catchError((error) => EMPTY)
            )
        )
    ));

    editPost$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.editPostApi),
        mergeMap(({post}) => this.postsService.edit(post)
        .pipe(
            map((data: Post) => {
                return PostActions.editPostSuccess(({post: data}))
            }),
            catchError((error) => EMPTY)
            )
        )
    ));

    addPost$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.addPostApi),
        mergeMap(({post}) => this.postsService.add(post)
        .pipe(
            map((data: Post) => {
                return PostActions.addPostSuccess({post: data});
            }),
            catchError((error) => EMPTY)
            )
        )
    ));

    deletePost$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.deletePostApi),
        mergeMap(({id}) => this.postsService.delete(id)
        .pipe(
            map(() => {
                return PostActions.deletePostSuccess({id});
            }),
            catchError((error) => EMPTY)
            )
        )
    ));

}