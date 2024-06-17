import { TestBed } from '@angular/core/testing';

import { CombatCoreService } from './combat-core.service';

describe('CombatCoreService', () => {
  let service: CombatCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
