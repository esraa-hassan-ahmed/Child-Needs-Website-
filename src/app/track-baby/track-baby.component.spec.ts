import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackBabyComponent } from './track-baby.component';

describe('TrackBabyComponent', () => {
  let component: TrackBabyComponent;
  let fixture: ComponentFixture<TrackBabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackBabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
