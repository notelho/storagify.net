import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDownloadComponent } from './animated-download.component';

describe('AnimatedDownloadComponent', () => {
  let component: AnimatedDownloadComponent;
  let fixture: ComponentFixture<AnimatedDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
