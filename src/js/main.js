import * as realTime from './realtime_function.js'

  setInterval(function() {
    realTime.updateTime()
  }, 1000);

