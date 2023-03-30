const User = require('./User');
const WateringHole = require('./WateringHoles');
const Review = require('./Reviews')

WateringHole.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Review.belongsTo(WateringHole, {
    foreignKey: 'watering_hole_id'
});

User.hasMany(WateringHole, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

WateringHole.hasMany(Review, {
    foreignKey: 'watering_hole_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Review, WateringHole };
