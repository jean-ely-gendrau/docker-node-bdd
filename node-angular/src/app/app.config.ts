// Importation des outils de configuration d’application Angular
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Import des routes définies dans ton appli

// Permet le support de l'hydratation côté client (SSR avec Angular Universal, par ex.)
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimisation des détections de changement (fusionne les événements)
    provideRouter(routes),                                 // Fournit le système de routing avec les routes définies
    provideClientHydration(withEventReplay())              // Active l'hydratation pour Angular SSR + relecture des événements utilisateur
  ]
};
