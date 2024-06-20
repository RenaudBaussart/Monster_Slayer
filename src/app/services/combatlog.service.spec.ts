import { TestBed } from '@angular/core/testing';

import { CombatlogService } from './combatlog.service';

describe('CombatlogService', () => {
  let service: CombatlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
