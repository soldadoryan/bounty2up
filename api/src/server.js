import app from './app';

app.socketio.on('connection', socket => {
  console.log('Usuário conectado!');
});

app.shttp.listen(3333);
