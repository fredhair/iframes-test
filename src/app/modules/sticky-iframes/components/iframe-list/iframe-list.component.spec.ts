import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeListComponent } from './iframe-list.component';

describe('IframeListComponent', () => {
  let component: IframeListComponent;
  let fixture: ComponentFixture<IframeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
