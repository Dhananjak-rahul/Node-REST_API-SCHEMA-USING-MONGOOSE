

const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    city: String,
        create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
const About = module.exports = mongoose.model('about', aboutSchema);
module.exports.get = function (callback, limit) {
    About.find(callback).limit(limit);
    
}
