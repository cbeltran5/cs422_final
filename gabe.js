
// Created a User class to hold the personal information common to all users
function User (name, language) {
  this.name = name;
  this.language = language;
  
  this.date_format = 1;
  this.time_format = 1;
  this.units_format = 'Imperial';
  
  // fahrenheit or celsius
  // Fahrenheit by default
  this.temerature_units = 'Fahrenheit'
  
  this.in_theme = 'wood';
  this.out_theme = 'wood';
  
  this.in_ornament = 'default';
  this.out_ornament = 'default';
  
  // new User adds itself to the array of users
  Users.push(this);
}

// An array of Users
var Users = [];

// variables for text
// English = 1 , Spanish = 2, etc...
var ENGLISH = 0;
var SPANISH = 1;

var SYSTEM_LANGUAGE = ["ENGLISH", "SPANISH"];

var MESSAGES = ["Messages", "Mensajes"];
var CAMERA = ["Camera", "Cámara"];
var TRAFFIC = ["Traffic","Tráfico"];
var TRANSPORT = ["Transport", "Transporte"];
var NEWS = ["News", "Noticias"];
var MIRROR = ["Mirror", "Espejo"];
var LIGHTS = ["Lights", "Luces"];
var ALARM = ["Alarm", "Alarma"];
var EMERGENCY = ["Emergency", "Emergencia"];
var SETTINGS = ["Settings", "Ajustes"];
var DEADBOLT = ["Dead Bolt", "Cerrojo"];

// months of the year
var JANUARY = ["January", "Enero"];
var FEBRUARY = ["February", "Febrero"];
var MARCH = ["March", "Marzo"];
var APRIL = ["April", "Abril"];
var MAY = ["May","Mayo"];
var JUNE = ["June", "Junio"];
var JULY = ["July", "Julio"];
var AUGUST = ["August", "Agosto"];
var SEPTEMBER = ["September", "Septiembre"];
var OCTOBER = ["October", "Octubre"];
var NOVEMBER = ["November", "Noviembre"];
var DECEMBER = ["December", "Diciembre"];



// when called, this function will update the text of the respective
// faric text object with a string that matches that object and the currently
// set language
function UpdateText() 
{
  Messagestext.text = MESSAGES[syslang];
  Cameratext.text = CAMERA[syslang];
  Traffictext.text = TRAFFIC[syslang];
  Transporttext.text = TRANSPORT[syslang];
  Newstext.text = NEWS[syslang];
  Mirrortext.text = MIRROR[syslang];
  Lightstext.text = LIGHTS[syslang];
  Alarmtext.text = ALARM[syslang];
  Emergtext.text = EMERGENCY[syslang];
  Settingstext.text = SETTINGS[syslang];
  Deadbolttext.text = DEADBOLT[syslang];
}

var MenuItems = [];

// height offsets
var height_offset_tall = 0;
var height_offset_medium = 100;
var height_offset_short = 200;

var doorwidth = 555;
var inside_door_left = 22;
var outside_door_left = 642;
var paneltop = 310;

var doorknob_height = 1020;
var doorknob_inside_leftoffset = 1110;


var deadbolt_height_offset = 680;
var deadbolt_left_offset = 1100;

var DATE_MONTHDDYYYY = "Month DD, YYYY";
var DATE_MMDDYYYY = "MM/DD/YYYY";
var DATE_DDMONTHYYYY = "DD Month YYYY";
var DATE_DDMMYYYY = "DD/MM/YYYY";

var TIME_12HOUR = 1;
var TIME_24HOUR = 2;

function getFormattedMonth(month)   {
  month = month + 1;
  if(Date_format == DATE_MONTHDDYYYY || Date_format == DATE_DDMONTHYYYY) {
    if      (month == 1) return JANUARY[syslang];
    else if (month == 2) return FEBRUARY[syslang];
    else if (month == 3) return MARCH[syslang];
    else if (month == 4) return APRIL[syslang];
    else if (month == 5) return MAY[syslang];
    else if (month == 6) return JUNE[syslang];
    else if (month == 7) return JULY[syslang];
    else if (month == 8) return AUGUST[syslang];
    else if (month == 9) return SEPTEMBER[syslang];
    else if (month == 10) return OCTOBER[syslang];
    else if (month == 11) return NOVEMBER[syslang];
    else if (month == 12) return DECEMBER[syslang];
  }
  
  if( month < 10) {
    month = "0" + month;
  }
  else {
    month = "" + month;
  }
  return month;
}

function getFormattedTimeString(hours, minutes){
  var AmPmDesignator = "";
  if(Time_format == TIME_12HOUR)  {
    if( hours >= 12) {
      AmPmDesignator = "PM";
    }
    else {
      AmPmDesignator = "AM";
    }
    hours = hours % 12;
    if (hours == 0) {
      hours = 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
  } // format hours to 12
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes + " " + AmPmDesignator;
}
function getFormattedDateString(day, month, year) {
  if(Date_format == DATE_MONTHDDYYYY ) {
    return month + " " + day + ", " + year;
  }
  else if (Date_format == DATE_MMDDYYYY ) {
    return "  " + month + "/" + day + "/" + year;
  }
  else if (Date_format == DATE_DDMONTHYYYY) {
    return day + " " + month + " " + year;
  }
  else if (Date_format == DATE_DDMMYYYY) {
    return "  " + day + "/" + month + "/" + year;
  }
}

function ShowDateTime()
{ 
  var date = new Date();
  var month = getFormattedMonth(date.getMonth());
  var timestr = getFormattedTimeString(date.getHours(), date.getMinutes());
  var datestr = getFormattedDateString(date.getDate(),month, date.getFullYear());
  
  Datetext.initialize(datestr);
  canvas.remove(Datetext);
  canvas.add(Datetext);

  Timetext.initialize(timestr);
  canvas.remove(Timetext);
  canvas.add(Timetext);

  timeout = setTimeout(ShowDateTime,1000);
}  