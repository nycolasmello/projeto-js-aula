// EXPRESS
const express = require('express');
const cors = require('cors');
const port = normalizaPort(process.env.PORT || '3000');
const router = require('./src/routes/APIRoute');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.get('/',(req,res)=>{
    res.send("Hello World")
})

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

// Start service
app.listen(port, function () {
    console.log(`API está rodando na porta ${port}`)
})