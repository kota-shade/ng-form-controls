import { TestBed, inject } from '@angular/core/testing';

import { NgxFormControlsService } from './ngx-form-controls.service';

describe('NgxFormControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFormControlsService]
    });
  });

  it('should be created', inject([NgxFormControlsService], (service: NgxFormControlsService) => {
    expect(service).toBeTruthy();
  }));
});
