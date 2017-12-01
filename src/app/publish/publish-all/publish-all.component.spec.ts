import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAllComponent } from './publish-all.component';

describe('PublishAllComponent', () => {
  let component: PublishAllComponent;
  let fixture: ComponentFixture<PublishAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
