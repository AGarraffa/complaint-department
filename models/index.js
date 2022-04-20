// model relationships
const User = require('./User');
const Complaint = require('./Complaint');
const Reply = require('./Reply');


User.hasMany(Complaint, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Complaint.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Reply, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Reply.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Complaint, Reply };