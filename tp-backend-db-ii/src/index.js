import app from './app';
import "./database";

app.listen(app.get('port'));
console.log('Server escuchando en el puerto ->', app.get('port'));