const express = require('express');

const { connectToDb, getDb } = require('./db');

//Initialize the app
const app = express();


//Parse incoming JSON
app.use(express.json());


let db;

connectToDb((err) => {
    if (!err) {
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
        db = getDb();

    }
});

//Creating our RESTful API endpoints

//Defining the API routers here

app.get('/api/students', (req, res) => {

    const page = req.query.p || 0;
    const studentsPerPage = 10;
    let students = [];


    db.collection('students')
        .find()
        .sort({ id: 1 })
        .skip(page * studentsPerPage)
        .limit(studentsPerPage)
        .forEach(student => students.push(student))
        .then(() => {
            res.status(200).json(students);
        })
        .catch(() => {
            res.status(500).json({ msg: 'Error getting students' });

        })


})


app.get('/api/students/:id', (req, res) => {

    const studentID = parseInt(req.params.id);
    if (!isNaN(studentID)) {
        db.collection('students')
            .findOne({ id: studentID })
            .then((student) => {
                if (student) {
                    res.status(200).json(student)

                }
                else {
                    res.status(404).json({ msg: 'Student not found' })

                }
            })
            .catch(() => {
                res.status(500).json({ msg: 'Error getting student info' })

            })
    } else {
        res.status(400).json({ Error: 'Student id must be a number' })

    }

})
//Adding student

app.post('/api/students/', (req, res) => {

    const student = req.body;
    db.collection('students')
        .insertOne({ student })
        .then((result) => {
            res.status(200).json({ result });

        })
        .catch(() => {
            res.status(500).json({ msg: 'Error creating student info' })

        })



})

//updating a student 
app.patch('/api/students/:id', (req, res) => {
    const updates = req.body;
    const studentID = parseInt(req.params.id);

    if (!isNaN(studentID)) {
        db.collection('students')
            .updateOne(
                { id: studentID },
                { $set: updates },
            )
            .then((result) => {
                res.status(200).json({ result })
            })
            .catch(() => {
                res.status(500).json({ msg: 'Error updating student info' })

            })
    } else {
        res.status(400).json({ Error: 'Student id must be a number' })

    }
})

//Delete a student 


app.delete('/api/students/:id', (req, res) => {

    const studentID = parseInt(req.params.id);
    if (!isNaN(studentID)) {
        db.collection('students')
            .deleteOne({ id: studentID })
            .then((result) => {
                res.status(200).json({ result })

            })
            .catch(() => {
                res.status(500).json({ msg: 'Error deleting student info' })

            })
    } else {
        res.status(400).json({ Error: 'Student id must be a number' })

    }

})
