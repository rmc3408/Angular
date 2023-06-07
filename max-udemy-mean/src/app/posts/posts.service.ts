import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { GetPostRequest, Post } from "./posts.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiURL = "http://localhost:4201/posts"
  private posts: Post[] = []
  private updatedPosts = new Subject<Post[]>()

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<GetPostRequest>(this.apiURL).subscribe(result => {
      this.posts = result.posts
      this.updatedPosts.next([...this.posts])
    })
    //return [...this.posts]
  }

  listenerUpdate() {
    return this.updatedPosts.asObservable()
  }

  addPost(title: string, content: string) {
    const newPost: Post = { id: null, title, content }
    this.http.post<GetPostRequest>(this.apiURL, newPost).subscribe((result) => {
      //console.log(result)
      this.posts.push(newPost)
      this.updatedPosts.next([...this.posts])
    })   
  }
}