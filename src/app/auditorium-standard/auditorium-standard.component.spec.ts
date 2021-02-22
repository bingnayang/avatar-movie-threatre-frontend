import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumStandardComponent } from './auditorium-standard.component';

describe('AuditoriumStandardComponent', () => {
  let component: AuditoriumStandardComponent;
  let fixture: ComponentFixture<AuditoriumStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriumStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
