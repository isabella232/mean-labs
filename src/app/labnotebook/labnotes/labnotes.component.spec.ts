import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabnotesComponent } from './labnotes.component';

describe('LabnotesComponent', () => {
  let component: LabnotesComponent;
  let fixture: ComponentFixture<LabnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
