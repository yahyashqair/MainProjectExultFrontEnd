import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfeatureComponent } from './nfeature.component';

describe('NfeatureComponent', () => {
  let component: NfeatureComponent;
  let fixture: ComponentFixture<NfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
