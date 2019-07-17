import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdeComponent } from './xde.component';

describe('XdeComponent', () => {
  let component: XdeComponent;
  let fixture: ComponentFixture<XdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
