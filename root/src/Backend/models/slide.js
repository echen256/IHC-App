
module.exports = function(sequelize, DataTypes){

    const Slide = sequelize.define('slide', {
        tissueId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tissueType: {
            type : DataTypes.STRING,
            allowNull: false
        },
        
    }
    
    );
    return Slide;
}