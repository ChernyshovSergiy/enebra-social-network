const mongoose = require('mongoose');

const Reference = mongoose.model('Reference');

module.exports.getReferences = (req, res) => {
    Reference.find().exec(function (err, results) {
        res.status(200).json(results);
    });
};
