import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Usuario = db.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: DataTypes.STRING 
    },
    nombre: {
        type: DataTypes.STRING 
    },
    apellido: {
        type: DataTypes.STRING 
    },
    email: {
        type: DataTypes.STRING 
    },
    telefono: {
        type: DataTypes.STRING 
    },
},
{timestamps:false,
tableName: 'usuarios'}
)

export default Usuario

