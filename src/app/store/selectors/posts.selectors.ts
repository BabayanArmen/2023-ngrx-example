import { createSelector } from "@ngrx/store";
import { FutureState, PostsState } from "../store-initial-stae.interface";

const getPostsState = (state: FutureState) => state.posts;

export const slectAllPosts = createSelector(
    getPostsState,
    (state: PostsState) => state.data
);

export const selectPostById = createSelector(
    getPostsState,
    (state: PostsState) => state.currentPost
);