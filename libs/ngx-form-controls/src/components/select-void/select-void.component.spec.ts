import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVoidComponent } from './select-void.component';

describe('SelectVoidComponent', () => {
  let component: SelectVoidComponent;
  let fixture: ComponentFixture<SelectVoidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVoidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
