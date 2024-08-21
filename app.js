const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

const goodHealth = true;

app.get('/health', (req, res) => {
  if (goodHealth) {
    return res.status(200).send('ok')
  }

  return res.status(500).send('fail')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
