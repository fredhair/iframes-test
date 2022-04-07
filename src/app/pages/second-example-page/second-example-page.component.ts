import { Component, OnInit } from '@angular/core';
import { IframeService } from 'src/app/modules/sticky-iframes/services/iframe.service';

@Component({
  selector: 'app-second-example-page',
  templateUrl: './second-example-page.component.html',
  styleUrls: ['./second-example-page.component.scss']
})
export class SecondExamplePageComponent implements OnInit {

  constructor(private iframes: IframeService) { }

  ngOnInit(): void {
    this.iframes.showIframe(0);
    this.iframes.hideIframe(1);
  }

}
