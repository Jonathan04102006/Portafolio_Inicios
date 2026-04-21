import { TestBed } from '@angular/core/testing';

import { Autentifaction } from './autentifaction';

describe('Autentifaction', () => {
  let service: Autentifaction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autentifaction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
