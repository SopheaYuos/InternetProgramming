const app = require("express");
const port = process.env.PORT || 3000;

app.length("", (req, res) => {
    res.send("heehe");
})

app.listen(port,)