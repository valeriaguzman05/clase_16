const express = require("express");

const app = express();

const router = express.Router();
// verision larga // 
/* const express = require("express")
const app = express()
const port = 9000
const handler = function handler () {
     console.log("El servidor esta escuchando correctamente en el puerto 9000...")
}


app.listen (port, handler)*/

// metodos // 
/* app.get("/handler1", function(req, res){
    res.status(200)
    res.set("content-Type", "text/plain")
    res.send("<h1> handler1 </h1>")
    console.dir(req.baseUrl)
    console.dir(req.body)
    console.dir(req.hostname)
    console.dir(req.method)
    console.dir(req.originalUrl)
    console.dir(req.path)
    console.dir(req.protocol)
    console.dir(req.query)
})
//console.dir se usa para hacerle un request a mi endpoint // */
//El app.use es propio de los middlewares y cuando lo vemos, sabemos que es un middleware, also cuando vemos "next"
//ejercicio// 
/* app.use(function(req, res, next) { 
    console.log("Soy un middleware");
    res.send("<H1>Soy un middeware</H1>");
    next();
}) */ 
 
router.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
app.use("/asset", router)

app.listen (9000, () => {
    console.log("El servidor esta escuchando correctamente en el puerto 9000...");
})
