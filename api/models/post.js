const { Sequelize, DataTypes, Model } = require("sequelize");

// On récupère l'instance de Sequelize qu'on a crée auparavant
const sequelize = require("../config/database");

// On définit un model que Sequelize pourra manage
class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize, // On passe l'instance de connexion
        modelName: "posts", // On donne le nom de la table
    }
);

module.exports = Post;