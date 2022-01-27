const express = require('express');
const bodyParser = require('body-parser');
const findRsvpAndUpdate = require('/Users/work2021/self 10 /hr-den16-self-assessment-week-10-v1/rsvp-form/database/controllers/rsvp.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../frontend/dist'));

app.post('/rsvps', (req, res) => {
  console.log(req.body)
  let dbEntry = req.body;
  delete dbEntry.submit;
  findRsvpAndUpdate(dbEntry);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
