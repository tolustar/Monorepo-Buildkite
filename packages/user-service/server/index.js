const app = require('./app');
const debug = require('debug')('example:server');

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

app.listen(app.get('port'), function () {
  debug(`User server listening on port ${app.get('port')}`);
});
