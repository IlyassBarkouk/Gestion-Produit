package com.example.Controller;

import com.example.DTO.ProduitDTO;
import com.example.Entity.Produit;
import com.example.Services.ProduitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produits")
@CrossOrigin(origins = "http://localhost:4200")
public class ProduitController {

    private final ProduitService produitService;

    public ProduitController(ProduitService produitService) {
        this.produitService = produitService;
    }

    @GetMapping
    public List<ProduitDTO> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/category/{categoryId}")
    public List<ProduitDTO> getProduitsByCategory(@PathVariable Long categoryId) {
        return produitService.getProduitsByCategory(categoryId);
    }

    @PostMapping
    public ProduitDTO saveProduit(@RequestBody Produit produit) {
        return produitService.saveProduit(produit);
    }
}
