# Overview
A simple Date object extension for adding commonly needed methods for formatting dates

# Usage
Include the date-format file in your HTML.
`<script type="text/javascript" src="date-format.js"></script>`

All instances of `Date` objects are now extended with additional functionality.
```
var d = new Date();

d.getMonthName(); // Name of current month ie. January, February, March

d.getDayName(); // Name of current day ie. Sunday, Monday, Tuesday

d.getHour12(); // Returns the hour in a 12-hour clockformat

d.getPeriod();  // Returns 'am' or 'pm' based on the 12-hour clock

d.getTimezone(); // Returns local timezone
```