import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedIntroductionComponent } from './animated-introduction.component';

describe('AnimatedIntroductionComponent', () => {
  let component: AnimatedIntroductionComponent;
  let fixture: ComponentFixture<AnimatedIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
