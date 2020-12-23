import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcedenceReportComponent } from './excedence-report.component';

describe('ExcedenceReportComponent', () => {
  let component: ExcedenceReportComponent;
  let fixture: ComponentFixture<ExcedenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcedenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcedenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
