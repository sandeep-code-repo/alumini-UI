import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeReportComponent } from './realtime-report.component';

describe('RealtimeReportComponent', () => {
  let component: RealtimeReportComponent;
  let fixture: ComponentFixture<RealtimeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
