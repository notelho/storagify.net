import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQualityComponent } from './home-quality.component';

describe('HomeQualityComponent', () => {
  let component: HomeQualityComponent;
  let fixture: ComponentFixture<HomeQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
