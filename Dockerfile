# On part sur une image officielle NodeJS, version light (Alpine = + léger, + rapide)
FROM node:alpine

# Déclaration d'une variable d'environnement pour le port (utile pour la suite)
ARG PORT=3000

# On définit le dossier de travail dans le conteneur
WORKDIR /app

# On copie les fichiers package.json et package-lock.json (ou yarn.lock)
# Important de le faire avant le code pour profiter du cache Docker
COPY ./package*.json ./

# Installation des dépendances
RUN npm install

# On expose le port défini via ARG (par défaut : 3000)
EXPOSE $PORT

# Lancement de l’appli en mode dev (modifie ici si tu veux du prod)
CMD ["npm", "run", "dev"]