import { TestBed } from '@angular/core/testing';

import { PnjCombatLogicService } from './pnj-combat-logic.service';

describe('PnjCombatLogicService', () => {
  let service: PnjCombatLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PnjCombatLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
