import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSidebarComponent } from './adm-sidebar.component';

describe('AdmSidebarComponent', () => {
  let component: AdmSidebarComponent;
  let fixture: ComponentFixture<AdmSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
