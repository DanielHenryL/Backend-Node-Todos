import dotenv from 'dotenv';
dotenv.config();
import express, {Application} from 'express';
import cors from 'cors';
import todoRoutes from '../routes/todo'
import { dbConnetion } from '../db/connection';
interface Path {
    todos:string
}

class Server{

    private app:Application;
    private port:string;
    private apiPath:Path;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.apiPath = {
            todos:'/api/todos'  
        }
       // Conexion bd
        this.conectarDB();
        // middleware de la aplicacion
        this.middleware();
        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnetion();
    }

    middleware(){
        //Cors
        this.app.use( cors() );
        // Lectura del body
        this.app.use( express.json() );
        // Carpeta publica
        this.app.use( express.static('public'));
    }
    routes(){
        this.app.use( this.apiPath.todos, todoRoutes )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en el puerto ${ this.port }` );
        })
    }
}

export default Server