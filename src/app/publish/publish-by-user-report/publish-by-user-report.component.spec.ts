import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishByUserReportComponent } from './publish-by-user-report.component';

describe('PublishByUserReportComponent', () => {
  let component: PublishByUserReportComponent;
  let fixture: ComponentFixture<PublishByUserReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishByUserReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishByUserReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
