import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishByUserComponent } from './publish-by-user.component';

describe('PublishByUserComponent', () => {
  let component: PublishByUserComponent;
  let fixture: ComponentFixture<PublishByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
