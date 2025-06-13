// Importation des décorateurs et outils nécessaires à un composant Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',                          // Balise utilisée pour intégrer ce composant dans l'index.html
  imports: [RouterOutlet],                       // Permet d'utiliser <router-outlet> dans le template (standalone Angular 15+)
  templateUrl: './app.component.html',           // Fichier HTML associé
  styleUrl: './app.component.css'                // Fichier CSS associé
})
export class AppComponent {
  title = 'Front Angular';                       // Propriété utilisée dans le template si besoin
}
