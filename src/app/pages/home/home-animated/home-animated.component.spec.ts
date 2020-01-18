import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnimatedComponent } from './home-animated.component';

describe('HomeAnimatedComponent', () => {
  let component: HomeAnimatedComponent;
  let fixture: ComponentFixture<HomeAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
