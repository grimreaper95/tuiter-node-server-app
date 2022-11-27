import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controllers.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

//const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'
const CONNECTION_STRING = 'mongodb+srv://root:root@cluster0.408urwm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);

const app = express();

const corsOpts = {
    origin: '*',

    methods: [
        'DELETE',
        'PUT',
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts))
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

TuitsController(app);
HelloController(app),
UserController(app)
app.listen(process.env.PORT || 4000);

