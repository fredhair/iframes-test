import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExamplePageComponent } from './second-example-page.component';

describe('SecondExamplePageComponent', () => {
  let component: SecondExamplePageComponent;
  let fixture: ComponentFixture<SecondExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondExamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
