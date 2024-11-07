const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let users = []; // armazenamento em memoria(uso em banco de dados em produção)

// rotas para registro de usuarios
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // verifica se o usuario ja existe
    const userExists = user.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'Usuário já existe!' });
    }

// Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'Usuário registrado com sucesso!'});
});

// Rota para login

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas!' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h'});
    res.json({ token });
});

// Middleware para verificar token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
    });
};