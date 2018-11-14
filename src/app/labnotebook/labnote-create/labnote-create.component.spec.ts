import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabnoteCreateComponent } from './labnote-create.component';

describe('LabnoteCreateComponent', () => {
  let component: LabnoteCreateComponent;
  let fixture: ComponentFixture<LabnoteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabnoteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabnoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
