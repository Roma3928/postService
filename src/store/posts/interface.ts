export interface Post {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

export interface PostsInitalState {
  posts: Post[];
  query: string;
  isLoading: boolean;
  error: boolean;
}
