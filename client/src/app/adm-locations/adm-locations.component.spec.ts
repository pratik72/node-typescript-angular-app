import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLocationsComponent } from './adm-locations.component';

describe('AdmLocationsComponent', () => {
  let component: AdmLocationsComponent;
  let fixture: ComponentFixture<AdmLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
