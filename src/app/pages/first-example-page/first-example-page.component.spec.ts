import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExamplePageComponent } from './first-example-page.component';

describe('FirstExamplePageComponent', () => {
  let component: FirstExamplePageComponent;
  let fixture: ComponentFixture<FirstExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstExamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
