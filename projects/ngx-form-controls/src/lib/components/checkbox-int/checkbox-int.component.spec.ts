import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIntComponent } from './checkbox-int.component';

describe('CheckboxIntComponent', () => {
  let component: CheckboxIntComponent;
  let fixture: ComponentFixture<CheckboxIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
