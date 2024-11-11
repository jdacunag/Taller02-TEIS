const express = require('express');
const pokeneasRouter = require('./routes/pokeneas');
const app = express();

app.use('/pokeneas', pokeneasRouter);

const PORT = 80;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
