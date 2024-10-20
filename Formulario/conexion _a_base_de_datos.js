// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    dob: Date
});

const User = mongoose.model('User', userSchema);

// Ruta para registrar usuarios
app.post('/api/registro', async (req, res) => {
    const { nombre, email, password, dob } = req.body;
    const nuevoUsuario = new User({ nombre, email, password, dob });
    
    try {
        await nuevoUsuario.save();
        res.status(201).send('Usuario registrado exitosamente');
    } catch (error) {
        res.status(500).send('Error al registrar usuario');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
