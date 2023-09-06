const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const cors = require('cors');

//server set up with Express and Node, and to handle endpoints for transitions and scenes data. Did not need separate routes, as game only has two endpoints needed for data

app.use(cors({
  origin: 'https://amiamistory.com'
}));

app.use(express.json());

const transitionsData = require('./data/transitions.json');
const scenesData = require('./data/scenes.json');

app.get('/', (_req, res) => {
  console.log("get request I guess");
  res.send("Hey, this server runs, cool");
});

app.get('/transitions', (_req, res) => {
  try {
    res.json(transitionsData);
  } catch (error) {
    console.error('Error fetching transitions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/scenes', (_req, res) => {
  try {
    res.json(scenesData);
  } catch (error) {
    console.error('Error fetching scenes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
