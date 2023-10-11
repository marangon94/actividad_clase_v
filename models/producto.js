import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Producto = db.define('producto', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING 
    },
    tipo: {
        type: DataTypes.STRING 
    },
    precio: {
        type: DataTypes.DOUBLE
    },
},
{timestamps:false,
tableName:'productos'}
)

export default Producto

