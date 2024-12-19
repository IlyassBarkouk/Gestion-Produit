import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/produit';
import { Category } from '../model/category';

@Component({
  selector: 'app-afficher-produit',
  standalone:false,
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css']
})
export class AfficherProduitComponent implements OnInit {
  produits: Produit[] = [];
  filteredProduits: Produit[] = [];
  categories: Category[] = [];
  selectedCategoryId: number | null = null; // ID de la catégorie sélectionnée
  private produitsUrl = 'http://localhost:8080/api/produits';
  private categoriesUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProduits();
    this.loadCategories();
  }

  loadProduits(): void {
    this.http.get<Produit[]>(this.produitsUrl).subscribe({
      next: (data) => {
        this.produits = data;
        this.filteredProduits = data; // Initialiser les produits filtrés avec tous les produits
        console.log('Produits loaded:', this.produits);
      },
      error: (err) => {
        console.error('Error loading produits:', err);
      },
    });
  }

  loadCategories(): void {
    this.http.get<Category[]>(this.categoriesUrl).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des catégories :', err);
      },
    });
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;

    if (target) {
      const value = target.value;

      // Réinitialiser le filtre si la valeur est vide
      this.selectedCategoryId = value === '' ? null : +value;

      // Filtrer les produits selon la catégorie sélectionnée
      this.filteredProduits = this.selectedCategoryId
        ? this.produits.filter((produit) => produit.categoryId === this.selectedCategoryId)
        : this.produits;
    }
  }
}
