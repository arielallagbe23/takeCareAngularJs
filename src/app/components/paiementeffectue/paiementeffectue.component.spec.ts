import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementeffectueComponent } from './paiementeffectue.component';

describe('PaiementeffectueComponent', () => {
  let component: PaiementeffectueComponent;
  let fixture: ComponentFixture<PaiementeffectueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementeffectueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementeffectueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
