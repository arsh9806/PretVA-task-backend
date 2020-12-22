import express from "express";
import mongoose from "mongoose";
import Buyer from "./buyer.js";
import Cors from "cors";


const app = express();
const port = process.env.port || 8001;
const connectionUrl = `mongodb+srv://admin:XmiM4J7ncfJaRBX@cluster0.spy67.mongodb.net/pretva?retryWrites=true&w=majority`

//Db config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

//Middleware 

app.use(express.json());
app.use(Cors())


//endpoints
app.get('/', (req,res) => {
    return res.status(200).send('Hi there !');
})

app.get('/buyers', (req,res) => {
    const filters = {};
    const sortFilter = {}
    if(req.query.buyerName) {
        filters['buyer_name'] = req.query.buyerName;
    }
    if(req.query.sortBy){
        sortFilter[req.query.sortBy] = 1;
    }
    if(req.query.productName){
        filters['product_name'] = req.query.productName;
    }
    if(req.query == {}){
        filters = {};
    }

    Buyer.find(filters).sort(sortFilter).then(resposne => {
        res.status(200).send(resposne);
    }).catch(err => {
        res.status(500).send("Server error")
    })
})




//listener
app.listen(port);

