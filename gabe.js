
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
  Ctatext.text = TRANSPORT[syslang];
  Newstext.text = NEWS[syslang];
  Mirrortext.text = MIRROR[syslang];
  Lightstext.text = LIGHTS[syslang];
  Alarmtext.text = ALARM[syslang];
  Emergtext.text = EMERGENCY[syslang];
  Settingstext.text = SETTINGS[syslang];
  Deadbolttext.text = DEADBOLT[syslang];
}

var paneltop = 310;





