import { Component } from '@angular/core';
import { Input } from '@angular/core';
//  import { RouterOutlet } from '@angular/router'; 
 import { RouterLink } from '@angular/router'; 
 import { RouterModule } from '@angular/router';
  @Component ({ 
 imports: [RouterLink, RouterModule], 
 selector: 'app-sidebar', styleUrl: './sidebar.css', 
 templateUrl: './sidebar.html', 
}) 

export class Sidebar { 

 @Input() isOpen = false; 
}
