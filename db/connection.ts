import mongoose  from 'mongoose';

export const dbConnetion = async() => {
    try {
        const mongoUri = process.env.MONGODB_TODOS;

        if (!mongoUri) {
            throw new Error('La variable de entorno MONGODB_TODOS no está definida');
        }

        await mongoose.connect( mongoUri );

        console.log( 'Base de datos online' );

    } catch (error) {
        console.log( error );
        throw new Error('Error al iniciar la bd');
    }
}

