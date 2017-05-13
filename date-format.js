Date.prototype.getMonthName = function() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'][this.getMonth()];
}

Date.prototype.getDayName = function() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][this.getDay()];
}

Date.prototype.getHours12 = function() {
    return (this.getHours() + 11) % 12 + 1; 
}

Date.prototype.getPeriod = function() {
    return this.getHours() >= 12 ? "pm" : "am";
}

Date.prototype.getTimezone = function() {
    var timezone = this.toString().match(/\(([A-Za-z\s].*)\)/);

    return timezone.length ? timezone[1] : false;
}

Date.prototype.getTimestamp = function() {
    var year = this.getFullYear(),
        month = this.getMonth(),
        day = this.getDate(),
        hours = this.getHours(),
        minutes = this.getMinutes(),
        seconds = this.getSeconds();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}

Date.prototype.getUTCTimestamp = function() {
    var year = this.getUTCFullYear(),
        month = this.getUTCMonth(),
        day = this.getUTCDate(),
        hours = this.getUTCHours(),
        minutes = this.getUTCMinutes(),
        seconds = this.getUTCSeconds();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}