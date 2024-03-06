import express from 'express'
import { initializeClientWp } from './src/whastapp/wpClient.js'
import { wpRouter } from './src/routes/wp.js'

await initializeClientWp()

const app = express()
app.use( express.json() )

// sendMessageWp( '5493813019083', ' mensaje', wpClient )
// sendMessageWp( '5493813019603', ' mensaje', wpClient )
app.use( '/api/wp/', wpRouter )

app.listen( 4004, () => {
  console.log( `escuchando en puerto ${ 4004 }` )
} )
