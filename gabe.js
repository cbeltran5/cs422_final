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


// created a format
function User (name, language) {
  //console.log("User Instance created");
  this.name = name;
  this.language = language;
  
  this.date_format = 1;
  this.time_format = 1;
  this.units_format = 'Imperial';
  
  this.in_theme = 'wood';
  this.out_theme = 'wood';
  
  this.in_ornament = 'default';
  this.out_ornament = 'default';
  //console.log("Hello from " + this.name);
}

