import { Request, Response } from "express";


export const getTodos = ( req:Request, res:Response ) => {


    res.json({
        msg:'getTodos'
    })
}
export const getTodo = ( req:Request, res:Response ) => {
    const { id } = req.params;
    
    res.json( {
        msg:'getTodo'
    } )

}


export const postTodo = ( req:Request, res:Response ) => {
    const todo = req.body;
    todo.done = false;
    res.json({
        msg:'postTodo',
        todo
    })
}
export const putTodo = ( req:Request, res:Response ) => {
    const { id } = req.params;
    const { body } = req;
    
   
    res.json({
        msg:'putTodo'
    })
    
}
export const deleteTodo = ( req:Request, res:Response ) => {
    const { id } = req.params;

    res.json({
        msg:'deleteTodo'
    });
}