import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmOrganizationsComponent } from './adm-organizations.component';

describe('AdmOrganizationsComponent', () => {
  let component: AdmOrganizationsComponent;
  let fixture: ComponentFixture<AdmOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
