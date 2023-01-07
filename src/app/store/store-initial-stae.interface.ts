import { Post } from "../models/post.model"

export interface FutureState {
    posts: PostsState
}

export interface PostsState {
    data: Post[],
    currentPost: Post | null,
}