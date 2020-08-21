const index = require('./index.js');
 module.exports = {
    msToTime: function(ms) {
    days = Math.floor(ms / 86400000);
    daysms = ms % 86400000;
    hours = Math.floor(daysms / 3600000);
    hoursms = ms % 3600000;
    minutes = Math.floor(hoursms / 60000);
    minutesms = ms % 60000;
    sec = Math.floor(minutesms / 1000);

    let str = "";
    if (days) str = str + days + "d ";
    if (hours) str = str + hours + "h ";
    if (minutes) str = str + minutes + "m ";
    if (sec) str = str + sec + "s";

    return str;
    },
    sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },
}