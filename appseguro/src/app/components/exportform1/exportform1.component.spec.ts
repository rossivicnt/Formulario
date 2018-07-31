import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exportform1Component } from './exportform1.component';

describe('Exportform1Component', () => {
  let component: Exportform1Component;
  let fixture: ComponentFixture<Exportform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exportform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exportform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
