import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdExamplePageComponent } from './third-example-page.component';

describe('ThirdExamplePageComponent', () => {
  let component: ThirdExamplePageComponent;
  let fixture: ComponentFixture<ThirdExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdExamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
