import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IframeID, IframeOptions } from '../models/iframes-common';

let iframes = [
  {
    id: 0,
    src: 'https://dannypendle.co.uk/',
    showing: true,
  },
  {
    id: 1,
    src: 'https://dannypendle.co.uk/',
    showing: true,
  }
] as IframeOptions[]

@Injectable({
  providedIn: 'root'
})
export class IframeService {

  private allIframes = new BehaviorSubject<IframeOptions[]>(iframes);
  allIframes$ = this.allIframes.asObservable();

  constructor() { }

  hideIframe(id: IframeID): void {
    const found = iframes.find(iframe => iframe.id === id)
    if(found) {
      found.showing = false;
      this.allIframes.next(iframes);
    }
  }

  showIframe(id: IframeID): void {
    const found = iframes.find(iframe => iframe.id === id)
    if(found) {
      found.showing = true;
      this.allIframes.next(iframes);
    }
  }
}
