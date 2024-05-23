const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
const port = 3000;

const indexRouteApi = require("./routes/index.routes");
app.use("/api", indexRouteApi);

app.listen(port, () => {
  console.log(`Тигрята пляшут на ${port} порту!!!`);
});
