require('dotenv').config()
const express = require('express')
const abilitiesRoutes = require('./routes/abilitiesRoutes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', abilitiesRoutes)

app.listen(3000, () => {
  console.log('Servidor encendido en el puerto 3000')
})
