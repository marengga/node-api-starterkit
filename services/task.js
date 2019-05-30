const Task = require('../models').Task;

const getAll = () => Task.findAll();
const getById = id => Task.findByPk(id);
const add = task => Task.create(task);

module.exports = {add, getAll, getById};