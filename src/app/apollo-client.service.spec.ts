import { TestBed, inject } from '@angular/core/testing';

import { ApolloClientService } from './apollo-client.service';

describe('ApolloClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApolloClientService]
    });
  });

  it('should be created', inject([ApolloClientService], (service: ApolloClientService) => {
    expect(service).toBeTruthy();
  }));
});
