const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: String, required: true},
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);