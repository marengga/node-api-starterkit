const taskServices = require('../services/task');

function getTasks(req, res){
	taskServices.getAll()
	.then(data => res.send(data));
};

function getTask(req, res){
	taskServices.getById(req.params.id)
	.then(data => res.send(data));
}

function addTask(req, res){
	taskServices.add({
    Title: req.body.title,
    Description: req.body.description,
    Due: req.body.due,
    Status: 0,
		// user_id: 1
	})
	.then(data => res.send(data));
};

module.exports = {
	getTask,
	getTasks,
	addTask
}
