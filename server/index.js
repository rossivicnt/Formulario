const express= require('express');
const cors = require('cors');
const morgan= require('morgan');
const app= express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/users',require('./routes/users.routes'));
app.use('/api/form1',require('./routes/forms1.routes'));
app.use('/api/export1',require('./routes/export1.routes'));

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});