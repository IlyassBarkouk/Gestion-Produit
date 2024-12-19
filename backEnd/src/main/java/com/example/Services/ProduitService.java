package com.example.Services;

import com.example.DTO.ProduitDTO;
import com.example.Entity.Produit;

import java.util.List;

public interface ProduitService {
    List<ProduitDTO> getAllProduits();

    List<ProduitDTO> getProduitsByCategory(Long categoryId);

    ProduitDTO saveProduit(Produit produit);
}
