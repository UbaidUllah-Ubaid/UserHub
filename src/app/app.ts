import { Component, signal } from '@angular/core'; 
import { RouterOutlet,  } from '@angular/router'; 
//  import { RouterLink } from '@angular/router'; 
 import { Navbar } from "./Header/navbar/navbar";
  import { Sidebar } from "./sidebar/sidebar"; 
//  import { Dashboard } from './sidebar/dashboard/dashboard'; 
// import { Usersprofile } from './sidebar/usersprofile/usersprofile'; 
 @Component({   
selector: 'app-root',   
 imports: [Navbar, Sidebar, RouterOutlet, ],   
 templateUrl: './app.html',   
 styleUrl: './app.css'
 }) 

export class App { 

  isSidebarOpen = false;  
   toggleSidebar() { 
        this.isSidebarOpen = !this.isSidebarOpen; 

       
      }  
}