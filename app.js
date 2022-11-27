import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controllers.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";


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
TuitsController(app);
HelloController(app),
UserController(app)
app.listen(process.env.PORT || 4000);

