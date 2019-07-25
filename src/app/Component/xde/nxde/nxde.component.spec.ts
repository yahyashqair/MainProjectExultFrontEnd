import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxdeComponent } from './nxde.component';

describe('NxdeComponent', () => {
  let component: NxdeComponent;
  let fixture: ComponentFixture<NxdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
