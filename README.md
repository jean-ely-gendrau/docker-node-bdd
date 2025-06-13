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

### 🔧 Docker & Docker Compose

- [Documentation Docker](https://docs.docker.com/)
- [Référence Docker Compose](https://docs.docker.com/compose/)
- [Commandes Docker Compose – Cheat Sheet](https://devhints.io/docker-compose)
- [Play with Docker (sandbox en ligne)](https://labs.play-with-docker.com/)

### 🟩 Node.js

- [Site officiel Node.js](https://nodejs.org/)
- [npm – gestionnaire de paquets](https://www.npmjs.com/)
- [Guide Node.js sur MDN](https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs)

### 🐬 MariaDB

- [Documentation MariaDB](https://mariadb.com/kb/en/documentation/)
- [Variables d'environnement MariaDB Docker](https://hub.docker.com/_/mariadb)

### 🧰 Adminer

- [Adminer – outil de gestion de base de données](https://www.adminer.org/)
- [Adminer sur Docker Hub](https://hub.docker.com/_/adminer)

### 🛠️ Outils pratiques

- [Dockerfile Best Practices (officiel)](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Docker Compose examples (GitHub)](https://github.com/docker/awesome-compose)
- [Cheat sheet Docker CLI](https://dockerlabs.collabnix.com/docker/cheatsheet/)

---
