import { Component, signal, } from '@angular/core';
import { Services } from '../../service/services';
import { Postuser } from '../postuser/postuser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usersprofile',
  imports: [Postuser, FormsModule],
  templateUrl: './usersprofile.html',
  styleUrl: './usersprofile.css',
})
export class Usersprofile {

  userData = signal<any[]>([]);

  selectedUser: any = null;
  selectedUserId!: number;

  // Desktop par user click hone ke baad posts show karne ke liye
  showPosts = false;

  constructor(private services: Services) {}

  ngOnInit() {

    this.services.getUserData().subscribe((data: any) => {

      console.log(data);
      this.filteredUsers = data;

      this.userData.set(data);

      // Starting mein first user select hoga
      // this.selectedUser = data[0];
      this.selectedUserId = data[0].id;

    });

  }


  // User List se user click
  passData(id: number) {

    this.selectedUserId = id;

    this.selectedUser = this.userData().find(
      (user: any) => user.id === id
    );

    // Desktop par user click hote hi posts show
    this.showPosts = true;

  }


  // Mobile ke View Posts button ke liye
  showUserPosts() {
    this.showPosts = true;
  }


  // Agar dobara user details par jana ho
  showUserDetails() {
    this.showPosts = false;
  }

  searchuser: string = '';
  filteredUsers: any[] = [];


searchUsers() {
  this.filteredUsers = this.userData().filter(user =>
    user.name.toLowerCase().includes(this.searchuser.toLowerCase())
  );

  console.log(this.filteredUsers);
}

selectUser(user: any) {
  this.passData(user.id);
  this.searchuser = '';
  this.searchUsers();
}

clickToSearch() {
  const user = this.userData().find(
    (user: any) =>
      user.name.toLowerCase() === this.searchuser.trim().toLowerCase()
  );

  if (user) {
    this.passData(user.id);
  }
}

}

