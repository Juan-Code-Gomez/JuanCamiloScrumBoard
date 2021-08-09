const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roleId: {type: mongoose.Schema.ObjectId, ref: "role"},
    date: {type: Date, default: Date.now},
    dbStatus: Boolean
});

const user = mongoose.model("user", userSchema);
module.exports = user;