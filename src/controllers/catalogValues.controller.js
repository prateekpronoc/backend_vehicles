const db = require("../models");
const CatalogValues = db.catalog_values;
const Op = db.Sequelize.Op;
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: tutorials } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, tutorials, totalPages, currentPage };
};

// Create and Save a new Tutorial
exports.create = (req, res) => {

};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const { page, size, masterId } = req.query;
    var condition = masterId ? { masterId: { [Op.like]: `%${masterId}%` } } : null;
    const { limit, offset } = getPagination(page, size);
    CatalogValues.findAndCountAll({ limit: 10000, offet: 0, where: condition })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};