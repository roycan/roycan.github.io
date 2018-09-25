---
layout: post
title: "Javascript Date Object"	
remarks: quick reference
categories: Teaching
tags: 
- soft_engg
---


    var d = new Date();
    // Tue Sep 25 2018 15:01:46 GMT+0800 (Philippine Standard Time)



## ways to create a new date object
~~~~
new Date()
new Date(YYYY, <0-11> , <1-31> , <0-23> , <0-59> , <0-59> , <0-99> )
new Date(milliseconds)
new Date(date string)
~~~~

### using date strings

Variations of the following should work:
~~~~
var d = new Date("October 13, 2014 11:13:00");
~~~~




JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).



## ways to display a date object

~~~~
d = new Date();
document.getElementById("demo").innerHTML = d;

document.getElementById("demo").innerHTML = d.toDateString();

document.getElementById("demo").innerHTML = d.toUTCString();
~~~~


## js date inputs


| Type |	Example |
| -----|-----------|
| ISO Date	| "2015-03-25" (The International Standard) |
| Short Date	| "03/25/2015" |
| Long Date	| "Mar 25 2015" or "25 Mar 2015" |

     var d = new Date("2015-03-25");
     var d = new Date("2015-03");
     var d = new Date("2015");
     var d = new Date("2015-03-25T12:00:00Z");
     var d = new Date("2015-03-25T12:00:00-06:30");
     var d = new Date("03/25/2015");
     var d = new Date("Mar 25 2015");
     var d = new Date("25 Mar 2015");
     var d = new Date("January 25 2015");
     var d = new Date("JANUARY, 25, 2015");

     

You can have the date in millisecond form too

    var msec = Date.parse("March 21, 2012");
    document.getElementById("demo").innerHTML = msec;


## getting parts of a date 

These methods can be used for getting information from a date object:

| Method	| Description |
|-----------|-------------|
| getFullYear() | 	Get the year as a four digit number (yyyy) |
| getMonth()    | Get the month as a number (0-11) |
| getDate() |	Get the day as a number (1-31) |
| getHours()	| Get the hour (0-23) |
| getMinutes()	| Get the minute (0-59) |
| getSeconds()	| Get the second (0-59) |
| getMilliseconds()	| Get the millisecond (0-999) |
| getTime()	| Get the time (milliseconds since January 1, 1970) |
| getDay()	| Get the weekday as a number (0-6) |
| Date.now()	| Get the time. ECMAScript 5.|



for UTC, just add UTC in the command

    getUTCDate()	

Same as getDate(), but returns the UTC date


## Set date methods

| Method	| Description |
|-----------|-------------|
| setDate()	| Set the day as a number (1-31) |
| setFullYear()	| Set the year (optionally month and day) |
| setHours()	| Set the hour (0-23) |
| setMilliseconds() |	Set the milliseconds (0-999) |
| setMinutes()	| Set the minutes (0-59) |
| setMonth()	| Set the month (0-11) |
| setSeconds()	| Set the seconds (0-59) |
| setTime()	| Set the time (milliseconds since January 1, 1970) |


The setFullYear() method sets the year of a date object. In this example to 2020:

~~~~
<script>
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;
</script>
~~~~


The setFullYear() method can optionally set month and day:

    d.setFullYear(2020, 11, 3);


The setDate() method can also be used to add days to a date:

~~~~
<script>
var d = new Date();
d.setDate(d.getDate() + 50);
document.getElementById("demo").innerHTML = d;
</script>
~~~~