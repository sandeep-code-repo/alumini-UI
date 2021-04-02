import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkflowComponent } from './updateworkflow.component';

describe('UpdateworkflowComponent', () => {
  let component: UpdateworkflowComponent;
  let fixture: ComponentFixture<UpdateworkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateworkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
