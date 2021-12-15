import mongoose from 'mongoose';

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>');
    process.exit(1);
}

const [_, _1, password, personName, phone] = process.argv;
const url =
    `mongodb+srv://fullstack:${password}@cluster0.ybh1j.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    phone: String,
});

const Person = mongoose.model('Person', personSchema);

if (personName && phone) {
    const person = new Person({
        name: personName,
        phone,
    });

    person.save().then(res => {
        console.log(`added ${personName} number ${phone} to the phonebook`);
        mongoose.connection.close();
    });
} else if (personName) {
    // Person.find({ name: name }).then(result => {
    //     result.forEach(person => {
    //         console.log(`${person.name} ${person.phone}`);
    //     });
    //     mongoose.connection.close();
    // });
    console.log('Please provide the phone number for the new person');
    process.exit(1);
} else {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.phone}`);
        });
        mongoose.connection.close();
    });
}