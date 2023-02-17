const express = require('express');
const routerApi = require('./routes') //Da igual si coloco index porque es algo que se busca en automatico
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());

//CORS
//origenes de los que si puedo recibir las peticiones
const whiteList = ['http://127.0.0.1:5500', 'https://myapp.co'];
const options = {
  origin: (origen, cb) => {
    if (whiteList.includes(origen) || !origen) {
      cb(null, true);
    } else {
      cb(new Error('No permitido'))
    }
  }
}
app.use(cors(options));
//------

app.get('/', (req, res) => {
  res.send('Hola mi server con express')
});

routerApi(app);

//los middlewares despues del routing
//va en orden, comportamiento secuencial
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
})
