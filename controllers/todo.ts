import { Request, Response } from "express";
import { Todo } from "../models/todo";


export const getTodos = async( req:Request, res:Response ) => {
    const todos = await Todo.find();

    res.json(todos)
}
export const getTodo = ( req:Request, res:Response ) => {
    const { id } = req.params;
    
    res.json( {
        msg:'getTodo'
    } )

}


export const postTodo = async( req:Request, res:Response ) => {
    const todo = req.body;
    const newTodo = new Todo(todo);
    newTodo.save()

    res.json({newTodo})
}
export const putTodo = ( req:Request, res:Response ) => {
    const { id } = req.params;
    const { body } = req;
    
   
    res.json({
        msg:'putTodo'
    })
    
}
export const deleteTodo = async( req:Request, res:Response ) => {
    const { id } = req.params;
    const deleteTodo = await Todo.findByIdAndDelete(id)
    res.json({
        msg:'deleteTodo',
        deleteTodo
    });
}