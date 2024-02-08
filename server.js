const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

const articlesInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

app.use(express.json({ extended: false }));

app.post(`/api/articles/:name/add-comments`, (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
