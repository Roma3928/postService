export interface PostInitalState {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

export interface PostsInitalState {
  posts: PostInitalState[];
  isLoading: boolean;
  error: boolean;
}
