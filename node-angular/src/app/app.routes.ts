// Importation du type Routes pour définir les routes de l'application
import { Routes } from '@angular/router';
// Importation du composant qui sera affiché pour une des routes
import { ProductListComponent } from './product-list/product-list.component';

// Déclaration du tableau de routes
export const routes: Routes = [
  {
    path: "products",                      // URL : /products
    component: ProductListComponent        // Composant à afficher : ProductListComponent
  }
];
