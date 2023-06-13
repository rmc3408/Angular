import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public post: Post = { id: '', title: '', content: '' };
  //public changeTitle: string = '';
  //public changeContent: string = '';
  private isEditable: string = '';
  //@Output() public postCreated = new EventEmitter<Post>();

  constructor(private postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      if (param.has('id')) {
        this.isEditable = param.get('id')!
        this.post = this.postsService.getPostbyID(this.isEditable)!
        //console.log(this.post)
      } else {
        this.isEditable = ''
        this.post = {id: '', title: '', content: ''}
      }
    })
  }

  // onAddPostContent(inputArea: HTMLTextAreaElement): void {
  //   console.dir(inputArea.value)
  //   this.post = inputArea.value
  // }

  // onAddPostContent(): void {
  //   this.post = { title: this.changeTitle, content: this.changeContent };
  //   this.postCreated.emit(this.post);
  // }

  savePostContent(form: NgForm): void {
    if (form.invalid) return;
    const { Title, Content } = form.value;
    // this.newPost = { title: Title, content: Content };
    // this.postCreated.emit(this.newPost);
    
    if (this.isEditable) {
      this.postsService.updatePost(this.post.id, Title, Content)
    } else {
      this.postsService.addPost(Title, Content)
    }
    
    form.resetForm()
  }
}
