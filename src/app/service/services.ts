import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ providedIn: 'root' }) 
export class Services { 
  userData = 'https://jsonplaceholder.typicode.com/users'; 
  postdata = 'https://jsonplaceholder.typicode.com/posts'; 
  commentData = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private data: HttpClient) {} 

  getUserData() { 
    return this.data.get(this.userData);
  } 

  getPostsByUserId(id: number) { 
    // Single quotes ki jagah backticks (`) use kiye hain
    return this.data.get(`${this.postdata}?userId=${id}`);
  } 

  getCommentsByPostId(id: number){
    return this.data.get(`${this.commentData}?postId=${id}`)
  }
}
    
