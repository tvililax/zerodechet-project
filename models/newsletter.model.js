/*
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
Definition
*/
const MongooseSchema = new Schema({
    email: { unique: true, type: String }
});
//

/*
Export
*/
module.exports =  mongoose.model('newsletter', MongooseSchema);
//