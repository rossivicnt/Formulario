import { TestBed, inject } from '@angular/core/testing';

import { Formulario1Service } from './formulario1.service';

describe('Formulario1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Formulario1Service]
    });
  });

  it('should be created', inject([Formulario1Service], (service: Formulario1Service) => {
    expect(service).toBeTruthy();
  }));
});
