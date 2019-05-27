
module.exports = function(sequelize, DataTypes){

    const Reagent = sequelize.define('reagent', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        catalog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expirationDate: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    
    );
    return Reagent;
}