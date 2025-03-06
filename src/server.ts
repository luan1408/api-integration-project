import express from 'express';
import { handleIncomingMessage } from './index';

const app = express();
app.use(express.json());

app.post('/webhook', async (req, res) => {
  const { Body, From } = req.body;
  await handleIncomingMessage(Body, From);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});