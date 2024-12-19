/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.DTO;

public class ProduitDTO {
    private Long id;
    private String nom;
    private Double prix;
    private Long categoryId; // ID de la catégorie associée
    private String categoryName; // Nom de la catégorie associée

    public ProduitDTO(Long id, String nom, Double prix, Long categoryId, String categoryName) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }

    // Getters et Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Double getPrix() {
        return prix;
    }

    public void setPrix(Double prix) {
        this.prix = prix;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
    
}

