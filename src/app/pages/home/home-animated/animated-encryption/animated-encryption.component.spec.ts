import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedEncryptionComponent } from './animated-encryption.component';

describe('AnimatedEncryptionComponent', () => {
  let component: AnimatedEncryptionComponent;
  let fixture: ComponentFixture<AnimatedEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
