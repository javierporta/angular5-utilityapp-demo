import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishByTypeOfReportComponent } from './publish-by-type-of-report.component';

describe('PublishByTypeOfReportComponent', () => {
  let component: PublishByTypeOfReportComponent;
  let fixture: ComponentFixture<PublishByTypeOfReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishByTypeOfReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishByTypeOfReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
