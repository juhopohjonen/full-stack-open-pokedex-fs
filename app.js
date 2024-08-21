const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;


app.use(express.static("dist"));

app.get('/health', (req, res) => {
  const fail = process.env.HEALTH == 'fail'

  return res.status(fail ? 500 : 200).send(fail ? 'fail' : 'ok')

})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
