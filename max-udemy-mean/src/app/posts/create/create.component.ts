import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public newPost: Post = { id: '', title: '', content: '' };
  public changeTitle: string = '';
  public changeContent: string = '';
  //@Output() public postCreated = new EventEmitter<Post>();

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  // onAddPostContent(inputArea: HTMLTextAreaElement): void {
  //   console.dir(inputArea.value)
  //   this.newPost = inputArea.value
  // }

  // onAddPostContent(): void {
  //   this.newPost = { title: this.changeTitle, content: this.changeContent };
  //   this.postCreated.emit(this.newPost);
  // }

  onAddPostContent(form: NgForm): void {
    if (form.invalid) return;
    const { Title, Content } = form.value;
    // this.newPost = { title: Title, content: Content };
    // this.postCreated.emit(this.newPost);
    this.postsService.addPost(Title, Content)
    form.resetForm()
  }
}
