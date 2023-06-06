import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Post } from "./posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = []
  private updatedPosts = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]
  }

  listenerUpdate() {
    return this.updatedPosts.asObservable()
  }

  addPost(title: string, content: string) {
    const newPost: Post = { title, content }
    this.posts.push(newPost)
    this.updatedPosts.next([...this.posts])
  }
}