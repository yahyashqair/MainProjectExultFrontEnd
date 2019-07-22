import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdeinfoComponent } from './xdeinfo.component';

describe('XdeinfoComponent', () => {
  let component: XdeinfoComponent;
  let fixture: ComponentFixture<XdeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
