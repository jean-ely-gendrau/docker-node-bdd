# 🐳 Cheat-Tips Docker Compose – L'essentiel cool 😎

Ce matin on a posé les bases de **Docker Compose**, alors voici un petit récap vite fait bien fait 💡

---

## ⚙️ Lancer ton environnement

```bash
docker-compose up
```

👉 Lance tout ton monde avec les services définis dans le `docker-compose.yml`
Ajoute `-d` si tu veux que ça tourne en arrière-plan :

```bash
docker-compose up -d
```

---

## 🔚 Stopper les services

```bash
docker-compose down
```

🛉 Stoppe et clean les conteneurs (mais pas les volumes ou images).

Ajoute `--volumes` si tu veux aussi supprimer les volumes :

```bash
docker-compose down --volumes
```

---

## 🔁 Relancer proprement

```bash
docker-compose down && docker-compose up --build
```

👌 Pour repartir de zéro avec une rebuild des images.

---

## 🧱 Rebuild une image sans tout casser

```bash
docker-compose build
```

👷 Rebuild juste les images, sans relancer les conteneurs.

---

## 🔍 Voir les logs

```bash
docker-compose logs
```

👀 Pour checker ce qu’il se passe dans tes services. Ajoute `-f` pour suivre en temps réel :

```bash
docker-compose logs -f
```

---

## 📦 Voir les conteneurs en cours

```bash
docker-compose ps
```

🔎 Liste les conteneurs liés à ton projet Docker Compose.

---

## 💬 Exécuter une commande dans un conteneur

```bash
docker-compose exec nom_du_service bash
```

💻 Pour "rentrer" dans ton conteneur en mode terminal. Très pratique pour debug ou bidouiller.

---

## 🚀 Tips bonus

- Fichier de config par défaut = `docker-compose.yml`
- Tu peux en utiliser un autre avec `-f` :

```bash
docker-compose -f mon-autre-fichier.yml up
```

---

Voilà, garde ça sous le coude 🔖
Et comme toujours : testez, cassez, reconstruisez 💥💡

---

## 📚 Ressources utiles

### 🐳 Docker & Docker Compose

- [Documentation Docker (officiel)](https://docs.docker.com/)
- [Référence Docker Compose](https://docs.docker.com/compose/)
- [Cheat sheet Docker CLI](https://dockerlabs.collabnix.com/docker/cheatsheet/)
- [Cheat sheet Docker Compose](https://devhints.io/docker-compose)
- [Play with Docker (sandbox en ligne)](https://labs.play-with-docker.com/)
- [Best Practices Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

### 🟩 Angular (frontend)

- [Documentation Angular (officiel)](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [Angular Routing](https://angular.io/guide/router)
- [Standalone Components](https://angular.io/guide/standalone-components)
- [Control Flow syntax (Angular v17+)](https://angular.io/guide/template-control-flow)
- [RxJS (programmation réactive)](https://rxjs.dev/)

### 🟨 TypeScript

- [Documentation TypeScript (officiel)](https://www.typescriptlang.org/docs/)
- [TypeScript en 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### 🧩 Express.js (backend Node.js)

- [Documentation Express](https://expressjs.com/)
- [Middleware CORS dans Express](https://expressjs.com/en/resources/middleware/cors.html)
- [MySQL2 pour Node.js (promesse)](https://www.npmjs.com/package/mysql2)

### 🐬 MariaDB & Adminer (base de données)

- [MariaDB Docker (variables env)](https://hub.docker.com/_/mariadb)
- [Documentation MariaDB](https://mariadb.com/kb/en/documentation/)
- [Adminer (interface de gestion)](https://www.adminer.org/)
- [Adminer Docker](https://hub.docker.com/_/adminer)

### 🧪 API REST & Bonnes pratiques

- [RESTful API Design](https://restfulapi.net/)
- [Postman pour tester vos routes](https://www.postman.com/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### 💡 Bonus : Dev utils

- [Visual Studio Code](https://code.visualstudio.com/)
- [ESLint (JS/TS linting)](https://eslint.org/)
- [Prettier (formatter)](https://prettier.io/)

---
