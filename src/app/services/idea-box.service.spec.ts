import { TestBed } from '@angular/core/testing';

import { IdeaBoxService } from './idea-box.service';

describe('IdeaBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaBoxService = TestBed.get(IdeaBoxService);
    expect(service).toBeTruthy();
  });
});
