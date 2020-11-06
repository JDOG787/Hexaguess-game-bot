const app = require("express")();
app.get("/", (_, res) => {
 res.send("ready")
});
app.listen(8080);