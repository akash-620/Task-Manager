const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
     try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
        
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = (req, res) => {
    res.send("Get a Tasks")
}
const updateTask = (req, res) => {
    res.send("=update a Tasks")
}
const deleteTask = (req, res) => {
    res.send("delete a Tasks")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}