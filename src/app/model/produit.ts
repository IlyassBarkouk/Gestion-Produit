export class Produit {
  id: number;
  nom: string;
  prix: number;
  categoryId: number; // ID de la catégorie
  categoryName: string; // Nom de la catégorie

  constructor(
    id: number,
    nom: string,
    prix: number,
    categoryId: number,
    categoryName: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
}
