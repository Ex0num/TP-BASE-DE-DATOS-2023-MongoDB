const mongoose = require('mongoose');
import config from './config';

// -------------------------------------------- CONEXION A DB -------------------------------------------- //
// mongodb+srv://<username>:<password>@gabriel-lopez-gasal.dp6kuvk.mongodb.net/
const uri = `mongodb+srv://${config.DB_CLUSTER_USERNAME}:${config.DB_CLUSTER_PASSWORD}${config.DB_CLUSTER_REFERENCE}/${config.INITIAL_CONNETION_DB_NAME}`;
const db = mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log("La base de datos está conectada a:", db.connection.name))
.catch(error => console.log("Hubo un error en la conexion a la base de datos."));