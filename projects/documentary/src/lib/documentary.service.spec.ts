import { TestBed } from '@angular/core/testing';

import { DocumentaryService } from './documentary.service';

describe('DocumentaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentaryService = TestBed.get(DocumentaryService);
    expect(service).toBeTruthy();
  });
});
