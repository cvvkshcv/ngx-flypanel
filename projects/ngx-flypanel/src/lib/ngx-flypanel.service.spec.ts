import { TestBed } from '@angular/core/testing';

import { NgxFlypanelService } from './ngx-flypanel.service';

describe('NgxFlypanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFlypanelService = TestBed.get(NgxFlypanelService);
    expect(service).toBeTruthy();
  });
});
