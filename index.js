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
      level: 'tracer',
      formatter: function (options) {
        //console.log('args:', options)
        // Return string will be passed to logger.
        // ['level=${options.level} title=${options.message} metadata=${newMeta} ]

        // var newMeta = options.meta;
        //fullMeta.id && delete newMeta.id;

        return  "custom stuff here: "+options.message;
      },
    })
  ]
});

logger.log('tracer', 'test tracer', {a:1,b:2,c:'a', id:1, trace: 'a', parent: '0'});
logger.log('debug', 'test debug');
logger.tracer('a');
