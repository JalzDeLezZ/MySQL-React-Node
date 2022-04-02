const xExpress = require('express');

const app = xExpress();

app.use(require('./routes/routes'));

app.listen(9000, () => {
    console.log('Server is running on port','http://localhost:' +9000);
})

/*
npm i express
npm i nodemon
npm i mulder
*/