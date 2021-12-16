import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Person from './models/person.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

morgan.token('body', function (req, res) {
    return req.method === 'POST' ?
        JSON.stringify(req.body) :
        '';
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));


app.get('/api/persons', async (req, res) => {
    const persons = await Person.find({});
    res.json(persons);
});

app.get('/api/persons/:id', async (req, res) => {
    const id = Number(req.params.id);
    const person = await Person.findById(id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const persons = persons.filter(person => person.id !== id);
    res.status(204).end();
});

app.post('/api/persons', async (req, res) => {
    const body = req.body;
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'name or number missing'
        });
    }
    const personWithSameName = await Person.find({
        name: body.name
    });
    if (personWithSameName[0]) {
        return res.status(400).json({
            error: 'name must be unique'
        });
    }
    const person = new Person({
        id: Math.floor(Math.random() * 100000),
        name: body.name,
        phone: body.number
    });
    await person.save();
    res.json(person);
});

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people<br><br>${new Date()}.`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});