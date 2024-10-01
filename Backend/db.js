const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://turakasushma2003:<password>@quickcure.oa1t8oj.mongodb.net/?retryWrites=true&w=majority&appName=Quickcure";
const encodedpassword = encodeURIComponent("Sush@123");
const newurl = uri.replace("<password>", encodedpassword);

const client = new MongoClient(newurl, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.listen(port, async () => {
    await client.connect();
    console.log(`Server running on http://localhost:${port}`);
    console.log("Connected to MongoDB");
});

app.get("/Login", async (req, res) => {
  try {
    const database = client.db('Quickcure');
    const result = await database.collection('login').insertOne(req.query);
    if (result) {
      res.send({ status: "success", data: result });
    } else {
      res.send({ status: "error" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get("/Signup", async (req, res) => {
  try {
    const database = client.db('Quickcure');
    const result = await database.collection('signup').insertOne(req.query);
    res.send({ status: "success", data: result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.get('/medicines', async (req, res) => {
  try {
    const database = client.db('Quickcure'); // Ensure you use the correct database
    const medicines = await database.collection('a to z').find({}).toArray();

    if (medicines.length > 0) {
      res.json({ status: 'success', data: medicines });
    } else {
      res.json({ status: 'fail', message: 'No medicines found' });
    }
  } catch (error) {
    console.error('Error fetching medicines:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});

app.get('/search', async (req, res) => {
  const { keyword } = req.query;

  console.log('Search keyword:', keyword);

  if (!keyword) {
    return res.status(400).json({ status: 'fail', message: 'Keyword is required for search' });
  }

  try {
    const database = client.db('Quickcure'); // Ensure you use the correct database
    const searchResults = await database.collection('a to z').find({
      name: new RegExp(keyword, 'i')
    }).toArray();

    console.log('Search results:', searchResults);

    if (searchResults.length > 0) {
      res.json({ status: 'success', items: searchResults });
    } else {
      res.json({ status: 'fail', message: 'No items found matching your search' });
    }
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});
