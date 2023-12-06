import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate.guard';

describe('canDeactivateGuard', () => {
  let canDeactivateGuard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    canDeactivateGuard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(canDeactivateGuard).toBeTruthy();
  });
});