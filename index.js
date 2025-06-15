const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ADD THIS ROUTE
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  // For now, just return a dummy reply
  return res.json({
    reply: `You said: ${message}`
  });
});

app.listen(port, () => {
  console.log(`LifeLine AI server running on port ${port}`);
});
