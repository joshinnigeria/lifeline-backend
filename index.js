const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // Simulated (mock) AI response:
  res.json({
    choices: [
      {
        message: {
          content: "I'm here for you. Everything you're feeling is valid. Let's take this one step at a time. 💛"
        }
      }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LifeLine AI server running on port ${PORT}`);
});
