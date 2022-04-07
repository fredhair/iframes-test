import { Component } from '@angular/core';
import { navLinks } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks = navLinks;

  title = 'iframes-test';
}
