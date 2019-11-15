import { TestBed } from '@angular/core/testing';

import { WalletServiceService } from './wallet-service.service';

describe('WalletServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletServiceService = TestBed.get(WalletServiceService);
    expect(service).toBeTruthy();
  });
});
