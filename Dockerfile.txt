# ============================================
# DOCKERFILE - La recette pour emballer l'app
# ============================================

# ÉTAPE 1 : On choisit l'image de base
# node:18-alpine = Node.js version 18 sur Alpine Linux (super léger)
FROM node:18-alpine

# ÉTAPE 2 : On crée le dossier de l'application dans le conteneur
WORKDIR /app

# ÉTAPE 3 : On copie les fichiers de dépendances
# On copie d'abord package.json et package-lock.json
COPY package*.json ./

# ÉTAPE 4 : On installe les dépendances
RUN npm install --production

# ÉTAPE 5 : On copie tout le reste du code
COPY . .

# ÉTAPE 6 : On expose le port 3000
# (comme une fenêtre pour que les gens puissent accéder à l'app)
EXPOSE 3000

# ÉTAPE 7 : On définit la commande à lancer
CMD ["npm", "start"]

# ============================================
# NOTES :
# - Alpine = version super légère de Linux
# - WORKDIR = comme "cd" mais pour le conteneur
# - RUN = commande exécutée pendant la construction
# - CMD = commande exécutée quand le conteneur démarre
# ============================================