import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}

  logout() {
    //TO DO
    this.goToLoginPage();
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
