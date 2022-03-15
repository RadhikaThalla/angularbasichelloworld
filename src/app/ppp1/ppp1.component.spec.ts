import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppp1Component } from './ppp1.component';

describe('Ppp1Component', () => {
  let component: Ppp1Component;
  let fixture: ComponentFixture<Ppp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ppp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
