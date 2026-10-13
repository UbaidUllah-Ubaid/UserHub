import { Component, Input, OnChanges, signal } from '@angular/core';
import { Services } from '../../service/services';
import { Commentpost } from '../commentpost/commentpost';

@Component({
  selector: 'app-postuser',
  imports: [Commentpost],
  templateUrl: './postuser.html',
  styleUrl: './postuser.css',
})
export class Postuser implements OnChanges {
  postId!: number;

  @Input() userId!: number;

  postUser = signal<any[]>([]);

  constructor(private services: Services) {}


  ngOnChanges() {
    if (this.userId) {
      this.services.getPostsByUserId(this.userId).subscribe((data: any) => {
        console.log('User Posts:', data);
        this.postUser.set(data);

      });

    }

  }

  postComments(id: number) {
      if (this.postId === id) { 
          this.postId = 0;
       } 
      else {

          this.postId = id;
         }

  }

}
