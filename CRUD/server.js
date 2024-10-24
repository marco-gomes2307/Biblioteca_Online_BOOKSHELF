const express = require('express');
const mongoose = require( 'mongoose');
const cors = require('cors');

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// conexão ao mongoDB
mongoose.connect('mongodb+srv://marcos97795:rHyAcSf2hOKc2SrW@library.s7nxo.mongodb.net/?retryWrites=true&w=majority&appName=library', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

// importação das rotas
const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes);

// definir a porta do servidor
app.listen(3000, () =>{
     console.log('Servidor rodando na porta 3000');
});