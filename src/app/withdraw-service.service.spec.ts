import { TestBed } from '@angular/core/testing';

import { WithdrawServiceService } from './withdraw-service.service';

describe('WithdrawServiceService', () => {
  let service: WithdrawServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
