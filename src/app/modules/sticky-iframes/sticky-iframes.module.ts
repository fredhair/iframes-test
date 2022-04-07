import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeComponent } from './components/iframe/iframe.component';
import { IframeListComponent } from './components/iframe-list/iframe-list.component';

const components = [
  IframeComponent,
  IframeListComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
  ]
})
export class StickyIframesModule { }
