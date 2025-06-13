// Permet de déclarer le service comme injectable dans tout Angular
import { Injectable } from '@angular/core';

// Définition de l'interface Product pour typer les données produit
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Déclaration du service injectable automatiquement (via le root injector)
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // Méthode asynchrone pour récupérer la liste des produits depuis une API
  async getProduct(): Promise<Product[]> {
    const response = await fetch(`http://localhost:3000`); // Appel à une API (ex: un backend Node/Express)

    if (response.ok) {
      return response.json(); // Retourne les données au format JSON si la réponse est correcte
    }

    return []; // Si erreur, retourne un tableau vide pour éviter les plantages
  }
}
