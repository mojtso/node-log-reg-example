import "reflect-metadata";
import express = require('express');
import {createConnection} from 'typeorm';

import User from './entity/User';

const app = express();
app.set('port', process.env.PORT || 3001);

createConnection().then(async connection => {
    
    

}).catch(error => console.log(error));

export default app;