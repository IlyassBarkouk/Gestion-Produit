import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  standalone:false,
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  produitForm: FormGroup;
  categories: Category[] = [];
  private categoriesUrl = 'http://localhost:8080/api/categories';
  private addProduitUrl = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.produitForm = this.fb.group({
      nom: ['', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      categoryId: ['', Validators.required], // Le champ pour sélectionner une catégorie
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.http.get<Category[]>(this.categoriesUrl).subscribe({
      next: (data) => {
        this.categories = data;
        console.log('Catégories chargées:', this.categories);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des catégories:', err);
      },
    });
  }
  

  addProduit(): void {
    if (this.produitForm.valid) {
      const selectedCategoryId = this.produitForm.get('categoryId')?.value;
      const selectedCategory = this.categories.find(cat => cat.id === +selectedCategoryId);
  
      const newProduit = {
        nom: this.produitForm.get('nom')?.value,
        prix: this.produitForm.get('prix')?.value,
        category: selectedCategory // Envoyez l'objet complet
      };
  
      this.http.post<Produit>(this.addProduitUrl, newProduit).subscribe({
        next: (response) => {
          console.log('Produit ajouté avec succès:', response);
          alert('Produit ajouté avec succès !');
          this.produitForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout du produit:', err);
          alert('Erreur lors de l’ajout du produit.');
        },
      });
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
  
}
