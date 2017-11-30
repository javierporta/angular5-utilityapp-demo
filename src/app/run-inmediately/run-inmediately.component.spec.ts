import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunInmediatelyComponent } from './run-inmediately.component';

describe('RunInmediatelyComponent', () => {
  let component: RunInmediatelyComponent;
  let fixture: ComponentFixture<RunInmediatelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunInmediatelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunInmediatelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
