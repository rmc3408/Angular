import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  // public posts: Post[] = [
  //   { title: 'first Post', content: 'This is content of posts'},
  //   { title: 'Second Post', content: 'This is content of posts'},
  //   { title: 'thrid Post', content: 'This is content of posts'},
  //   { title: 'Fourth Post', content: 'This is content of posts'},
  // ]

  //@Input() public posts: Post[] = [];
  public posts: Post[] = []
  private postsSubscribed!: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
      this.posts = this.postsService.getPosts()
      // It will redo, if something change on Post[] in service
      this.postsSubscribed = this.postsService.listenerUpdate()
        .subscribe((postList: Post[]) => this.posts = postList)
  }

  ngOnDestroy(): void {
    this.postsSubscribed.unsubscribe();
  }
  

}
