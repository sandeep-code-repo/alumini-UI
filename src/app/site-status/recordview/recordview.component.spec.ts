import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordviewComponent } from './recordview.component';

describe('RecordviewComponent', () => {
  let component: RecordviewComponent;
  let fixture: ComponentFixture<RecordviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
