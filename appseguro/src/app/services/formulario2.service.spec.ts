import { TestBed, inject } from '@angular/core/testing';

import { Formulario2Service } from './formulario2.service';

describe('Formulario2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Formulario2Service]
    });
  });

  it('should be created', inject([Formulario2Service], (service: Formulario2Service) => {
    expect(service).toBeTruthy();
  }));
});
