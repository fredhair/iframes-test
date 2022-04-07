import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'iframes-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit, OnDestroy {

  @Input() iframeSource: string = ''

  iframeOptions = '';

  iframeSanitizedSrc?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.iframeSanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSource);
    console.log('Iframe created');
  }
  
  ngOnDestroy(): void {
    console.log('Iframe destroyed');
  }

}
