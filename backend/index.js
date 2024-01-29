const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username, password } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: password },
      { headers: { "private-key": "5b95a4b3-e6cc-4e95-8895-56680e0c1a0f" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response && e.response.status && e.response.data) {
      res.status(e.response.status).json(e.response.data);
    } else {
      res.status(500).json({ error: "Internal Server eerror" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
