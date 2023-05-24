import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 750,
      once: true,
      debounceDelay: 500,
      delay: 250
    });
  }

  goToForm() {
    // this.router.navigateByUrl('/', { fragment: 'contact-form' });
  }
}
