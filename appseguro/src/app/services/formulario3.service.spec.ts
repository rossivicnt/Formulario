import { TestBed, inject } from '@angular/core/testing';

import { Formulario3Service } from './formulario3.service';

describe('Formulario3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Formulario3Service]
    });
  });

  it('should be created', inject([Formulario3Service], (service: Formulario3Service) => {
    expect(service).toBeTruthy();
  }));
});
