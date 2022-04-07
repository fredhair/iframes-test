import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IframeOptions } from '../../models/iframes-common';
import { IframeService } from '../../services/iframe.service';

@Component({
  selector: 'iframes-iframe-list',
  templateUrl: './iframe-list.component.html',
  styleUrls: ['./iframe-list.component.scss']
})
export class IframeListComponent implements OnInit {

  allIframes: Observable<IframeOptions[]> = this.iframes.allIframes$;

  constructor(private iframes: IframeService) { }

  ngOnInit(): void {
  }

}
