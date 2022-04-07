import { Component, OnInit } from '@angular/core';
import { IframeService } from 'src/app/modules/sticky-iframes/services/iframe.service';

@Component({
  selector: 'app-third-example-page',
  templateUrl: './third-example-page.component.html',
  styleUrls: ['./third-example-page.component.scss']
})
export class ThirdExamplePageComponent implements OnInit {

  constructor(private iframes: IframeService) { }

  ngOnInit(): void {
    this.iframes.hideIframe(0);
    this.iframes.hideIframe(1);
  }

}
