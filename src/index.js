const config = require("../config.json");
const vlcRoutes = require("./routes/VlcController");
const express = require('express');
const app = express();

app.use(express.json())
app.use('/vlc', vlcRoutes);
app.listen(config.app.port, () => console.log('Server started: '+config.app.port));