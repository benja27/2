import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import cors from "cors"

const app = express()
const secret = "elbenja"

app.use(cors({
    origin: "*",
    methods: "GET, POST"
}));

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const users = [
    {id:1, username:"benja", password: bcrypt.hashSync('asdfasdf', 10) }
]

const autheticateToken = (req,res,next) =>{
    const token = req.headers["authorization"]
    console.log(token)
    if(!token) return res.status(401).json({message:"acceso denegado"})
    jwt.verify(token, secret,  (err,user) =>{
        if(err) return res.status(403).json({message:"token invalido"})
        req.user = user
        next()
    })
}

app.post('/signup', (req,res)=>{
    const {username, password} = req.body 
    let user = { username, password: bcrypt.hashSync(password,10) }
    if(user){
        users.push(user)
        // console.log(users)
    }
    res.json("usuarios creados con exito")    
})

app.post("/login", (req,res)=>{
    let {username, password} = req.body 
    let user = users.find(u => u.username === username )
    // console.log(user)
    if(!user || !bcrypt.compareSync(password, user.password)){
        return res.status(401).json({message: "credenciales incorrectas"})
    }
    const token = jwt.sign({username}, secret, {expiresIn:"1m"})
    res.json({token})
})

app.get("/protected" , autheticateToken , (req, res)=>{
    res.json({message: `bienvenido al inicio perrazo ${req.user.username} `})
} )


app.listen(3000, ()=>{
    console.log('servidor corriendo en el puerto 3000')
})