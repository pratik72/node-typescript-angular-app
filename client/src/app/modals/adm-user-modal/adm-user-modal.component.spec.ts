import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserModalComponent } from './adm-user-modal.component';

describe('AdmUserModalComponent', () => {
  let component: AdmUserModalComponent;
  let fixture: ComponentFixture<AdmUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
