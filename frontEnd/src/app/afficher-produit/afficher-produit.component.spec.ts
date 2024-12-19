import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProduitComponent } from './afficher-produit.component';

describe('AfficherProduitComponent', () => {
  let component: AfficherProduitComponent;
  let fixture: ComponentFixture<AfficherProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficherProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
