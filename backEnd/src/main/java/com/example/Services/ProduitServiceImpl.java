package com.example.Services;

import com.example.DTO.ProduitDTO;
import com.example.Entity.Category;
import com.example.Entity.Produit;
import com.example.Repository.CategoryRepository;
import com.example.Repository.ProduitRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProduitServiceImpl implements ProduitService {

    private final ProduitRepository produitRepository;
    private final CategoryRepository categoryRepository;

    public ProduitServiceImpl(ProduitRepository produitRepository, CategoryRepository categoryRepository) {
        this.produitRepository = produitRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<ProduitDTO> getAllProduits() {
        List<Produit> produits = produitRepository.findAll();
        return produits.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProduitDTO> getProduitsByCategory(Long categoryId) {
        List<Produit> produits = produitRepository.findByCategoryId(categoryId);
        return produits.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProduitDTO saveProduit(Produit produit) {
        Category category = categoryRepository.findById(produit.getCategory().getId())
                .orElseThrow(() -> new RuntimeException("Catégorie introuvable avec l'ID : " + produit.getCategory().getId()));

        produit.setCategory(category);
        Produit savedProduit = produitRepository.save(produit);
        return convertToDTO(savedProduit);
    }

    private ProduitDTO convertToDTO(Produit produit) {
        return new ProduitDTO(
                produit.getId(),
                produit.getNom(),
                produit.getPrix(),
                produit.getCategory() != null ? produit.getCategory().getId() : null,
                produit.getCategory() != null ? produit.getCategory().getNom() : null
        );
    }
}
