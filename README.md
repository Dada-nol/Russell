# Russell API

Russell est une API REST développée avec Node.js, Express et MongoDB. Ce projet a été déployé sur Railway.


## Introduction

Russell est une API REST conçue pour gérer les utilisateurs, catways et faire des réservations. Elle permet de créer, lire, mettre à jour et supprimer des utilisateurs, catways et réservations dans une base de données MongoDB. L'API est déployée sur Railway pour une accessibilité facile. Le domaine est le suivant : https://russell-production.up.railway.app/

## Fonctionnalités

- Création d'utilisateur
- Lecture des informations utilisateur
- Mise à jour des informations utilisateur
- Suppression d'utilisateur
- Création d'un catway
- Lecture des informations du catway
- Mise à jour des informations du catway
- Suppression d'un catway
- Création d'une réservation
- Lecture des informations d'une réservation
- Suppression d'une réservation

## Technologies utilisées

- Node.js
- Express
- MongoDB
- Railway (pour le déploiement)

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez le repository :

    ```sh
    git clone https://github.com/votre-utilisateur/russell-api.git
    cd russell-api
    ```

2. Installez les dépendances :

    ```sh
    npm install
    ```

## Configuration

Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires. Voici un exemple de fichier `.env` :

```env
PORT=3000
MONGODB_URI=mongodb+srv://nardoldarren:4r1DfEFcw7LnHUej@russell.1evinln.mongodb.net/?retryWrites=true&w=majority&appName=Russell
