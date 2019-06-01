
module.exports = function(sequelize, DataTypes){

    const Slide = sequelize.define('slides', {
        
        tissueId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tissueType : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        reagent : {
            type : DataTypes.INTEGER,
            references : {
                model : "reagents",
                key : 'id'
            } 
        }
           
    }
    
    );
    return Slide;
}