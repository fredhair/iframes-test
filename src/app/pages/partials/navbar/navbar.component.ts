import { Component, Input, OnInit } from '@angular/core';
import { NavbarLink } from 'src/app/models/app-common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() links = [] as NavbarLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
