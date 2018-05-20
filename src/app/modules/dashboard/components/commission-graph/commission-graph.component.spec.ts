import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionGraphComponent } from './commission-graph.component';

describe('CommissionGraphComponent', () => {
  let component: CommissionGraphComponent;
  let fixture: ComponentFixture<CommissionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
