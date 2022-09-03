import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  items: MenuItem[]
  constructor(private _router: Router) {
    this.items = [
      {
        label: 'About',
        routerLink: 'about'
      },
      {
        label: 'Gallery',
        routerLink: 'gallery'
      },
      {
        label: 'Events',
        routerLink: 'evs'
      },
      {
        label: 'Blog',
        routerLink: 'blog'
      },
      {
        label: 'Employment',
        routerLink: 'employment'
      },
    ];
  }

  ngOnInit(): void {
  }

  toHomePage() {
    this._router.navigate(['']);
  }

}
