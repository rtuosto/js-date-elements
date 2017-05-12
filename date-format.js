Date.prototype.getMonthName = function() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'][this.getMonth()];
}

Date.prototype.getHours12 = function() {
    var hours = this.getHours();
    if (hours === 0) {
        return 12;
    } else if (hours > 12) {
        return hours - 12;
    } else {
        return hours;
    }
}

Date.prototype.getPeriod = function() {
    var hours = this.getHours();
    if (hours >= 12) {
        return 'pm';
    } else {
        return 'am';
    }
}

Date.prototype.getDayName = function() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][this.getDay()];
}

Date.prototype.getTimezone = function() {
    return this.toString().match(/\(([A-Za-z\s].*)\)/).length ? this.toString().match(/\(([A-Za-z\s].*)\)/)[1] : false;
}