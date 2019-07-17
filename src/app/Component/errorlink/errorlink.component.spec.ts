import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorlinkComponent } from './errorlink.component';

describe('ErrorlinkComponent', () => {
  let component: ErrorlinkComponent;
  let fixture: ComponentFixture<ErrorlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
