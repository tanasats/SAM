import { TestBed } from '@angular/core/testing';

import { MsuAuthenService } from './msu-authen.service';

describe('MsuAuthenService', () => {
  let service: MsuAuthenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsuAuthenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
