const express = require("express")

const app = express()

const districts = require("./routes/districts")

app.use(express.json());
app.use('/api/districts', districts)

const port = 3002;
app.listen(port, () => console.log(`port ${port}`));