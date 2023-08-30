// server.js
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const firebaseConfig = require('./firebaseConfig');
const serviceAccount =  require("./serviceAccount.json");



const app = express();
app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});

// Example API route to authenticate user
app.post('/authenticate', async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json(decodedToken);
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

console.log(firebaseConfig);

app.get('/api/images', async (req, res) => {
    try {
      const storage = admin.storage();
      const bucket = storage.bucket(); // Use the default bucket
      const [files] = await bucket.getFiles();
  
      const imageUrls = files.map(file => {
        const imageUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
        return imageUrl;
      });
  
      res.status(200).json(imageUrls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
      res.status(500).json({ error: 'Error fetching image URLs' });
    }
  });

app.post('/saveGameData', async (req, res) => {
    const { userId, gameData } = req.body;
  
    if (!userId) {
      res.status(400).json({ error: 'User ID is missing' });
      return;
    }
  
    try {
      const db = admin.firestore();
      const docRef = db.collection('gameData').doc(userId);
      await docRef.set(gameData);
      res.status(200).json({ message: 'Game data saved successfully' });
    } catch (error) {
      console.error('Error saving game data:', error);
      res.status(500).json({ error: 'Error saving game data' });
    }
  });
  


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
