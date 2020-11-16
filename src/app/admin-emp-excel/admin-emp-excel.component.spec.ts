import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpExcelComponent } from './admin-emp-excel.component';

describe('AdminEmpExcelComponent', () => {
  let component: AdminEmpExcelComponent;
  let fixture: ComponentFixture<AdminEmpExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmpExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
