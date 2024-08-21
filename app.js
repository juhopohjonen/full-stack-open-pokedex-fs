const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;
const FAIL = true

app.use(express.static("dist"));

app.get('/health', (req, res) => {
  if (FAIL) {
    return res.status(500).send('fail')
  }

  return res.status(500).send('fail')

})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
