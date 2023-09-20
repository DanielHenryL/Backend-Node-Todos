import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
    description:{
        type:String,
        required: [true, 'La descripcion es obligatoria'],
        min: 2
    },  
    done:{
        type:Boolean,
        default:false,
        required: true
    }
})

TodoSchema.methods.toJSON = function(){
    const { __v,_id, ...todo } = this.toObject();
    todo.id = _id;
    return todo
} 
export const Todo = model('Todo', TodoSchema);
