import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RouterService', () => {
  let service: RouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterService],
      imports: [RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(RouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
