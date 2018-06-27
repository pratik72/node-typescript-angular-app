import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDepartmentsComponent } from './adm-departments.component';

describe('AdmDepartmentsComponent', () => {
  let component: AdmDepartmentsComponent;
  let fixture: ComponentFixture<AdmDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
