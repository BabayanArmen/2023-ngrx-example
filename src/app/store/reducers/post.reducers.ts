import { createReducer, on } from "@ngrx/store";
import { PostsState } from "../store-initial-stae.interface";
import * as PostActions from '../actions/post.actions';
import { Post } from "src/app/models/post.model";

export const initialState: PostsState = {
    data: [],
    currentPost: null
};

export const postsReducer = createReducer(
    initialState,
    on(PostActions.getPostsSuccess, (state, props: {posts: Post[]} ) => ({
        ...state,
        data: props.posts
    })),
    on(PostActions.getPostByIdSuccess, (state, props: {post: Post} ) => ({
        ...state,
        currentPost: props.post
    })),
    on(PostActions.editPostSuccess, (state, props: {post: Post} ) => {
        let posts: Post[] = state.data.concat();
        let p = posts.find(x => x.id === props.post.id);
        if(p) {
            posts[posts.indexOf(p)] = props.post;
        };
        return {
            ...state,
            data: posts
        }
    }),
    on(PostActions.addPostSuccess, (state, props: {post: Post} ) => {
        let posts: Post[] = state.data.concat();
        posts.push(props.post)
        return {
            ...state,
            data: posts
        }
    }),
    on(PostActions.
        deletePostSuccess, (state, props: {id: number} ) => {
        let posts: Post[] = state.data.concat();
        posts = posts.filter(x => x.id !== props.id);
        return {
            ...state,
            data: posts
        }
    }),
)
