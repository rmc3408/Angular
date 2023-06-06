import { Component, Input } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  // public posts: Post[] = [
  //   { title: 'first Post', content: 'This is content of posts'},
  //   { title: 'Second Post', content: 'This is content of posts'},
  //   { title: 'thrid Post', content: 'This is content of posts'},
  //   { title: 'Fourth Post', content: 'This is content of posts'},
  // ]

  @Input() public posts: Post[] = [];
}
