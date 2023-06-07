export interface Post {
  id: string;
  title: string; 
  content: string; 
}

export interface PostDB {
  _id: string;
  title: string; 
  content: string; 
}

export interface GetPostRequest {
  message: string;
  posts: PostDB[]
}

export interface createPostRequest {
  message: string;
  posts: PostDB
}