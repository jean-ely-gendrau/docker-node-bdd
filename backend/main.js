// Importation des modules nécessaires
import express from "express";               // Framework web pour créer une API REST
import cors from "cors";                     // Middleware pour autoriser les requêtes cross-origin
import mysql from 'mysql2/promise';          // Client MySQL compatible avec async/await

// Création de l'application Express
const apiRest = express();
apiRest.use(cors());                         // Active CORS (pour permettre les appels depuis ton front Angular)

// Port d'écoute : utilise la variable d'environnement PORT ou 3000 par défaut
const PORT = process.env.PORT || 3000;

// Connexion à la base de données MySQL/MariaDB (via Docker Compose, le host est "bd")
const connection = await mysql.createConnection({
  host: 'bd',                                // Nom du service défini dans docker-compose.yml
  user: 'admin-user',                        // Identifiants définis dans docker-compose.yml
  password: 'admin-user',
  database: 'node_product',
  port: 3306                                 // Port standard MySQL
});

// Définition d'une route GET sur la racine de l’API
apiRest.get("/", async (req, res) => {
  try {
    // Exécute une requête SQL pour récupérer tous les produits
    const [results, fields] = await connection.execute(
      'SELECT * FROM `products`'
    );

    res.json(results);                      // Renvoie le résultat en JSON au frontend
  } catch (err) {
    console.log(err);                       // En cas d'erreur, on l'affiche côté serveur
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Démarrage du serveur sur l’adresse 0.0.0.0 pour être accessible depuis Docker
apiRest.listen(PORT, "0.0.0.0", () => {
  console.log("Server start on http://localhost:" + PORT);
});
