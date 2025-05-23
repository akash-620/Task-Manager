const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)
