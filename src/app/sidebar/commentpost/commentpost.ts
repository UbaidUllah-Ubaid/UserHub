import { Component, OnChanges,OnInit,signal } from '@angular/core';
import { Services } from '../../service/services';
import { Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-commentpost',
  styleUrl: './commentpost.css',
  templateUrl: './commentpost.html',
})
export class Commentpost implements OnChanges{
   selectedUserId!: number;

  @Input() postId!: number;
  
  

  commentPost = signal<any[]>([]);

  constructor(private services: Services) {}


  ngOnChanges() {

      return this.services.getCommentsByPostId(this.postId).subscribe((data: any) => {

        console.log(' Posts:', data);

        this.commentPost.set(data);
        

      });

    

  }

}

