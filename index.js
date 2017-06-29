var winston = require('winston');

var logger = new (winston.Logger)({
  levels: {
      error: 0,
      tracer: 1,
      info: 2,
      debug: 3
    },
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      level: 'debug',
      formatter: function (options) {
        // Return string will be passed to logger.
        return  "custom stuff here: "+options.message;
      },
    })
  ]
});

logger.log('tracer', 'test tracer');
logger.log('debug', 'test debug');
logger.tracer('a');
