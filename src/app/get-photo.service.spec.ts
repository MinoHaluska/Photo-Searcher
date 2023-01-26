import { TestBed } from '@angular/core/testing';

import { GetPhotoService } from './get-photo.service';

describe('GetPhotoService', () => {
  let service: GetPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
