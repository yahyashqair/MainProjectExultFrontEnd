import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureinfoComponent } from './featureinfo.component';

describe('FeatureinfoComponent', () => {
  let component: FeatureinfoComponent;
  let fixture: ComponentFixture<FeatureinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
