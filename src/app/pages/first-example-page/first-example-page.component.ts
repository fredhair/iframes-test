import { Component, OnInit } from '@angular/core';
import { IframeService } from 'src/app/modules/sticky-iframes/services/iframe.service';

@Component({
  selector: 'app-first-example-page',
  templateUrl: './first-example-page.component.html',
  styleUrls: ['./first-example-page.component.scss']
})
export class FirstExamplePageComponent implements OnInit {

  constructor(private iframes: IframeService) { }

  ngOnInit(): void {
    this.iframes.showIframe(1);
    this.iframes.hideIframe(0);
  }

}
