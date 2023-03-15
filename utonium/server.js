const express = require('express')
const Sequelize = require('sequelize')
const cors = require('cors')

const sequelize = new Sequelize('utoniumdb', 'root', '',{
    // storage:'database.db',
    host: 'localhost',
    dialect: 'mysql',
    define:{
        timestamps:false
    }
})

const Profesor = sequelize.define('profesor',{
    name:Sequelize.STRING,
    password: Sequelize.STRING
})

const Activitate = sequelize.define('activitate',{
    name:Sequelize.STRING,
    descriere:Sequelize.TEXT,
    cod:Sequelize.INTEGER,
    dataInceput:Sequelize.DATE,
    durata:Sequelize.INTEGER
})

const Feedback = sequelize.define('feedback',{
    emoticon:Sequelize.ENUM('smileyFace', 'frownyFace', 'surprisedFace', 'confusedFace'),
	data: Sequelize.DATE
})

Profesor.hasMany(Activitate)
Activitate.hasMany(Feedback)

const app = express()
app.use(cors())
app.use(express.json())

sequelize.sync()
  .then(() => console.log('created'))
  .catch((error) => console.log(error))


app.get('/profesor', async (req, res) => {
	try {
		const profesor = await Profesor.findAll()
		res.status(200).json(profesor)
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.post('/profesor', async (req, res) => {
	try {
		const profesor = req.body
		await Profesor.create(profesor)
		res.status(201).json({ message: 'created' })
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.get('/activitate', async (req, res) => {
	try {
		const activitate = await Activitate.findAll()
		res.status(200).json(activitate)
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.post('/activitate', async (req, res) => {
	try {
		const activitate = req.body
		await Activitate.create(activitate)
		res.status(201).json({ message: 'created' })
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.get('/feedback', async (req, res) => {
	try {
		const feedback = await Feedback.findAll()
		res.status(200).json(feedback)
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.post('/feedback', async (req, res) => {
	try {
		const feedback = req.body
		await Feedback.create(feedback)
		res.status(201).json({ message: 'created' })
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.get('/profesor/:pid', async (req, res) => {
	try {
		const profesor = await Profesor.findByPk(req.params.pid, {
			include: Activitate
		})
		if (profesor) {
			res.status(200).json(profesor)
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})


app.get('/profesor/:pid/activitate', async (req, res) => {
	try {
		const profesor = await Profesor.findByPk(req.params.pid)
		if (profesor) {
			const activitate = await profesor.getActivitates()
			res.status(200).json(activitate)
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.post('/profesor/:pid/activitate', async (req, res) => {
	try {
		const profesor = await Profesor.findByPk(req.params.pid)
		if (profesor) {
			const activitate = req.body
			activitate.profesorId = profesor.id
			await Activitate.create(activitate)
			res.status(201).json({ message: 'created' })
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.get('/activitate/:aid/feedback', async (req, res) => {
	try {
		const activitate = await Activitate.findByPk(req.params.aid)
		if (activitate) {
			const feedback = await activitate.getFeedbacks()
			res.status(200).json(feedback)
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.post('/activitate/:aid/feedback', async (req, res) => {
	try {
		const activitate = await Activitate.findByPk(req.params.aid)
		if (activitate) {
			const feedback = req.body
			feedback.activitateId = activitate.id
			await Feedback.create(feedback)
			res.status(201).json({ message: 'created' })
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.get('/activitate/:cod', async (req, res) => {
	try {
		const activitate = await Activitate.findOne({ where: {
			cod: req.params.cod
		}}, {
			include: Feedback
		})
		if (activitate) {
			res.status(200).json(activitate)
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})

app.get('/profesor/:name/:password', async (req, res) => {
	try {
		const profesor = await Profesor.findOne({ where: {
			name: req.params.name,
			password: req.params.password
		}}, {
			include: Activitate
		})
		if (profesor) {
			res.status(200).json(profesor)
		} else {
			res.status(404).json({ message: 'not found'})
		}
	} catch (err) {
		console.warn(err)
		res.status(500).json({ message: 'some error occured' })
	}
})


  app.listen(8080)

