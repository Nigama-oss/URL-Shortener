const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const urls = require('./db/urls');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.post('/api/shortener', async(req, res) => {
    const puny = await urls.find(req.params.name);
  if (shortener) {
    res.redirect(shortener.url);
  } else { 
    res.redirect(`/404.html?name=${req.params.name}`);
  }
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})




