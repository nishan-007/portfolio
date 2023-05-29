import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showNavLinks: boolean = false;
  isActive: number = -1;

  constructor() {}

  toggleNavLinks() {
    this.showNavLinks = !this.showNavLinks;
  }

  activeLink(isActive: number) {
    this.isActive = isActive;
    this.showNavLinks = !this.showNavLinks;
    this.toggleNavLinks();
  }
}
