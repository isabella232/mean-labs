import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Post } from './post.model';

const BACKENDURL = environment.apiUrl + '/posts/';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{posts: Post [], postCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

  getPostUpdateLister() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
    _id: string,
    title: string,
    content: string,
    imagePath: string,
    creator: string
    }>(BACKENDURL + id);
  }

  getPosts(postPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postPerPage}&page=${currentPage}`;
    this.http.get<{message: string, posts: any, maxPosts: number}>(BACKENDURL + queryParams)
    .pipe(map((postData) => {
      return {
        posts: postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath,
            creator: post.creator
          };
      }), maxPosts: postData.maxPosts};
    }))
      .subscribe((transformedPostData) => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);

    this.http.post<{message: string, post: Post}>(BACKENDURL, postData)
    .subscribe((responseData) => {
      this.router.navigate(['/posts']);
    });
  }

  updatePost( id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof(image) === 'object') {
      postData = new FormData();
      postData.append('id', id);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
        creator: null // managed in the backend, too easily manipulated on FE.
      };
    }

    this.http
      .put(BACKENDURL + id, postData)
      .subscribe(response => {
        this.router.navigate(['/']);
    });
  }

  deletePost(postId: string) {
    return this.http.delete(BACKENDURL + postId);
  }
}
