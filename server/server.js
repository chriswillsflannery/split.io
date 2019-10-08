const express = require("express");
const app = express();
const path = require('path');

// if (process.env.NODE_ENV === 'production') {
app.use('/build', express.static(path.join(__dirname, '../build'))); //static serve files in bundle.js or whatever is in build folder. this is what actually "connects" our backend to react.

app.get('/', (req, res) => {
  console.log('serving');
  res.sendFile(path.join(__dirname, '../index.html'));
})
// }

app.listen(3000, () => {
  console.log(`listening on port 3000`);
})