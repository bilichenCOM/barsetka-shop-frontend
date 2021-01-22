const express = require('express');
const app = express();

app.use(express.static('./dist/barsetka-shop-frontend'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/barsetka-shop-frontend/'});
});

app.listen(process.env.PORT || 8080);
