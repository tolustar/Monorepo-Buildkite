const app = require('./app');

const port = parseInt(process.env.PORT || '3001', 10);
app.set('port', port);

app.listen(app.get('port'), function () {
  console.log(`Product server listening on port ${app.get('port')}`);
});
