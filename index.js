import express from 'express'
import { initializeClientWp } from './src/whastapp/wpClient.js'
import { wpRouter } from './src/routes/wp.js'
import dotenv from 'dotenv'
dotenv.config()
await initializeClientWp()

const app = express()
app.use( express.json() )

// sendMessageWp( '5493813019083', ' mensaje', wpClient )
// sendMessageWp( '5493813019603', ' mensaje', wpClient )
app.use( '/api/wp/', wpRouter )
app.get( '/', ( req, res ) => {
  res.end( 'hola' )
} )

app.listen( 4000, () => {
  console.log( 'escuchando en puerto 5996' )
} )
