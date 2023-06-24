import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import usuariosRoutes from './routes/usuarios.routes';
import autenticacionesRoutes from './routes/autenticacion.routes';
import ticket from './models/ticket';
import cors from 'cors';

import sprint2Routes from './routes/sprint2.routes';
import sprint3Routes from './routes/sprint3.routes';
import sprint4Routes from './routes/sprint4.routes';
import sprint5Routes from './routes/sprint5.routes';
import informesRoutes from './routes/informes.routes';

// Implemetnacion de express
const app = express();

// Habilita CORS
app.use(cors());

// Seteo de variables
app.set('pkg', pkg);
app.set('port', process.env.PORT || 3111)

//Imprime en consola de servidor las solicitudes hechas
app.use(morgan('dev'));

//Entiende los datos con formato JSON
app.use(express.json());

//Get base
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        autor: app.get('pkg').author,
        descripcion: app.get('pkg').description,
        version: app.get('pkg').version,
    });
});

//Direccionamiento de rutas
app.use('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/autenticacion', autenticacionesRoutes);

// Tickets
app.use('/api/tp/tickets/sprint-2', sprint2Routes);
app.use('/api/tp/tickets/sprint-3', sprint3Routes);
app.use('/api/tp/tickets/sprint-4', sprint4Routes);
app.use('/api/tp/tickets/sprint-5', sprint5Routes);
app.use('/api/tp/tickets/informes/', informesRoutes)

app.use('/api/tp/tickets/get-all', async (req, res)=> 
{
    try 
    {
        let ticketsEcontrados = await ticket.find({});
        console.log("Getting all tickets");
        res.status(200).json(ticketsEcontrados);
    } 
    catch {res.json("Hubo un error en la búsqueda de los tickets"); res.status(404); /*Not found*/}
});

export default app;