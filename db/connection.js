import { Sequelize } from 'sequelize'

// Creación de la instancia de Sequelize
const db = new Sequelize(
    'xqdagkth', // DB name
    'xqdagkth', // User
    'XV1GCKH0QkkefMxR2fMV74NYDjQONu78', // Password
    {
  host: 'silly.db.elephantsql.com',
  dialect: 'postgres',
  logging: true
})

export default db

