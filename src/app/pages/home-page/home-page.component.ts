import { Component, OnInit } from '@angular/core';
import { IframeService } from 'src/app/modules/sticky-iframes/services/iframe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private iframes: IframeService) { }

  ngOnInit(): void {
    this.iframes.showIframe(0);
    this.iframes.showIframe(1);
  }

}
