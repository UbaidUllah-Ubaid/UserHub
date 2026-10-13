import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

    @Output() menuClicked = new EventEmitter<void>();
  openSidebar() {
    this.menuClicked.emit();
  }
}
