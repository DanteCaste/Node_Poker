const express = require ('express')
const app = express()


//middlewares
app.use(function(req, res, next){
	console.log('request url: ' + req.url)
	next()
})

app.use((req, res, next) => {
	console.log('Checkpoint')
	next()
})

//routes 

app.get('/',(req, res) => {
	res.end('Hello World!')
})

app.get('/login',(req, res) => {
	res.end('Login Here')
})

app.get('*',(req, res) => {
	res.end('File Not Found')
})

app.listen(3000, () => {
	console.log('server listening...')
})