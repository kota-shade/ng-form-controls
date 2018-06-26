import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormControlsComponent } from './ngx-form-controls.component';

describe('NgxFormControlsComponent', () => {
  let component: NgxFormControlsComponent;
  let fixture: ComponentFixture<NgxFormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
