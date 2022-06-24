const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/database");

const PostModel = require("./models/post");

app.post("/create-post", (req, res) => {
    /**
     * 
     *   Ici créer un post
     * 
     */
});

app.get("/get-posts", (req, res) => {
    const searchInput = req.query.searchInput;

    if (searchInput) {
        /**
         * 
         *   Ici retourner le post correspondant au nom en param (Idée d'implémentation: Utiliser
         *   les opérators afin de renvoyer les post dont les nom se rapprochent le plus et pas
         *   seulement ceux ou le nom est exact)
         * 
         */
    } else {
        /**
         * 
         *   Ici retourner tous les posts
         * 
         */
    }
});

app.post("/update-post", (req, res, next) => {
    /** 
     * 
     *  Ici update un post (choisissez comment vous passez vos paramètres :)
     * 
     */
});

app.post("/delete-post", (req, res, next) => {
    /** 
     * 
     *  Ici supprimer un post
     * 
     */
});

const initApp = async () => {
    try {
        /**
         * 
         *  Ici on connecte sequelize à la db
         * 
         */
        console.log("Connection has been established successfully.");

        // On synchronise le model (se référer à la doc pour mieux comprendre)
        PostModel.sync({
            alter: true,
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }

    // On écoute sur le port pour réceptionner les requêtes du front
    app.listen(port, () => {
        console.log(`Server is up and running at: http://localhost:${port}`);
    });
};

initApp();