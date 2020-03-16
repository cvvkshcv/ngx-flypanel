import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlypanelComponent } from './ngx-flypanel.component';

describe('NgxFlypanelComponent', () => {
  let component: NgxFlypanelComponent;
  let fixture: ComponentFixture<NgxFlypanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlypanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
