const express = require('express');
const cors = require('cors');
const { nexmo, PORT } = require('./config/config');

const app = express();
const from = 'SMS Hello World';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', express.static(__dirname + '/public'));

app.post('/sms', express.json(), (req, res) => {
  const to = req.body.phone;
  let message = req.body.message;

  if (to && message) {
    message = message.slice(0, 67);

    nexmo.message.sendSms(from, to, message, (err, responseData) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ msg: 'Error has ocurred when trying to send msg' });
      } else {
        console.log(responseData);
        res.send({ msg: 'Message sent' });
      }
    });
  } else {
    res.status(400).send({ msg: 'Invalid parameters' });
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
