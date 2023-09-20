import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';


export const validarCampos = ( req:Request, res:Response, next:NextFunction ) =>{
    const erros = validationResult( req );
    if( !erros.isEmpty() ){
        return res.status(400).json( erros )
    }
    next(); // sino entra al if entonces pasa al siguiente error si lo hubiese, sino se ejecutara el controlador.
}


