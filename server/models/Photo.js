const mongoose = require('mongoose');
const { model } = require('./User');

const photoSchema = mongoose.Schema({
    photo:{
        type:Buffer
    }
});

photoSchema.methods.toJSON = function(){
    const result = this.toObject();
    delete result.photo;
    return result;
};

const Photo = mongoose.model('Photo',photoSchema);

module.exports = Photo;