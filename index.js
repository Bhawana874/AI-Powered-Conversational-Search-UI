
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/converse', async (req, res) => {
  const userQuery = req.body.query;
  // Simple call to OpenAI API -- replace <OPENAI_KEY>
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer <OPENAI_KEY>",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [{role: "user", content: userQuery}]
    })
  });
  const data = await response.json();
  const aiReply = data.choices[0].message.content;
  // Simulate a data response (for demo)
  let simulatedData;
  if (/sales|revenue/i.test(userQuery)) {
      simulatedData = {region: "APAC", value: 123000, quarter: "Q2"};
  } else if (/growth|users/i.test(userQuery)) {
      simulatedData = {users: 6000, growth: "12% YoY"};
  }
  res.json({reply: aiReply, data: simulatedData || null});
});

app.listen(5000, () => console.log('Server running on port 5000'));
