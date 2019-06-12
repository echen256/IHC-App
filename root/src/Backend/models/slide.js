
module.exports = function (sequelize, DataTypes) {

    const Slide = sequelize.define('slides', {

        tissueId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tissueType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dilutionFactor: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
    return Slide;
}