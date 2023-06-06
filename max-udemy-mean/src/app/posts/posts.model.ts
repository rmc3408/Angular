export interface Post {
  id: string | null;
  title: string; 
  content: string; 
}

export interface GetPostRequest {
  message: string;
  posts: Post[]
}