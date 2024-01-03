import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            this.isHomePage = this.router.url === '/'; // Sprawdź adres URL strony głównej
        } 
    });
  }

  @HostListener('window:scroll', []) 
    onWindowScroll() {
      this.isScrolled = window.scrollY > 0 && this.isHomePage || !this.isHomePage;
    }
}
