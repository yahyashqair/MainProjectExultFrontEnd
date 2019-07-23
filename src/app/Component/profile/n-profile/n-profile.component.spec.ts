import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NProfileComponent } from './n-profile.component';

describe('NProfileComponent', () => {
  let component: NProfileComponent;
  let fixture: ComponentFixture<NProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
