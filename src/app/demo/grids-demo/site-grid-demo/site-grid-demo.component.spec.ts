import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGridDemoComponent } from './site-grid-demo.component';

describe('SiteGridDemoComponent', () => {
  let component: SiteGridDemoComponent;
  let fixture: ComponentFixture<SiteGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
