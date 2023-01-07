import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const getPostsApi = createAction('[Posts] get posts api');
export const getPostsSuccess = createAction('[Posts] get posts success', props<{posts: Post[]}>());

export const getPostByIdApi = createAction('[Posts] get by id', props<{id: number}>());
export const getPostByIdSuccess = createAction('[Post] get by id success', props<{post: Post}>());

export const addPostApi = createAction('[Posts] add post', props<{post : Post}>());
export const addPostSuccess = createAction('[Posts] add post success', props<{post : Post}>());

export const editPostApi = createAction('[Posts] edit post', props<{post: Post}>());
export const editPostSuccess = createAction('[Posts] edit post success', props<{post: Post}>());

export const deletePostApi = createAction('[Posts] delete post', props<{id: number}>());
export const deletePostSuccess = createAction('[Posts] delet post success', props<{id: number}>());