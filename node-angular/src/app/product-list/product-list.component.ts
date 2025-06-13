// Importation des éléments nécessaires pour un composant Angular
import { Component, inject, OnInit } from '@angular/core';
// Importation du type Product et du service ProductService
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',              // Nom de la balise HTML utilisée pour ce composant
  imports: [],                               // Si tu utilises standalone components, tu ajouteras ici les imports nécessaires
  templateUrl: './product-list.component.html', // Fichier HTML lié au composant
  styleUrl: './product-list.component.css'      // Fichier CSS lié au composant
})
export class ProductListComponent implements OnInit {
  // Injection du service ProductService via la nouvelle API `inject()` (Angular 14+)
  productService = inject(ProductService);

  // Déclaration d'un tableau de produits vide (type : Product[])
  products: Product[] = [];

  // Hook de cycle de vie appelé à l'initialisation du composant
  async ngOnInit(): Promise<void> {
    // Appel asynchrone au service pour récupérer la liste des produits
    this.products = await this.productService.getProduct();
  }
}
