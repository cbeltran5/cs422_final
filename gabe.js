var F = 'Fahrenheit';
var C = 'Celsius';
var MainUnit = F;
var TemperatureF = 49;

function C2F(C) {
  return C * 9 / 5 + 32;
}

function F2C(F) {
  return (F - 32) * 5 / 9;
}



function TodoList() {

}

/***********************************************************************
                           DATE AND TIME
************************************************************************/
var TIME_12HOUR = "12 Hour Format";
var TIME_24HOUR = "24 Hour Format";
var DATE_MONTHDDYYYY = "Month DD, YYYY";
var DATE_MMDDYYYY = "MM/DD/YYYY";
var DATE_DDMONTHYYYY = "DD Month YYYY";
var DATE_DDMMYYYY = "DD/MM/YYYY";

function getFormattedMonth(month) {
  month = month + 1;
  if(Date_format == DATE_MONTHDDYYYY || Date_format == DATE_DDMONTHYYYY) {
    if (month == 1)
      return JANUARY[syslang];
    else if (month == 2)
      return FEBRUARY[syslang];
    else if (month == 3)
      return MARCH[syslang];
    else if (month == 4)
      return APRIL[syslang];
    else if (month == 5)
      return MAY[syslang];
    else if (month == 6)
      return JUNE[syslang];
    else if (month == 7)
      return JULY[syslang];
    else if (month == 8)
      return AUGUST[syslang];
    else if (month == 9)
      return SEPTEMBER[syslang];
    else if (month == 10)
      return OCTOBER[syslang];
    else if (month == 11)
      return NOVEMBER[syslang];
    else if (month == 12)
      return DECEMBER[syslang];
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
  var spacing = "";
  // fix minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // adjust if set to 12 hour format
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
  }
  // if in 24 hour format. add spaces to center text
  else {
    spacing = "    ";
  }
  return spacing + hours + ":" + minutes + " " + AmPmDesignator;
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
function ShowDateTime() {
  Time_format = TIME_12HOUR;
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

// variables for text
// English = 1 , Spanish = 2, etc...
var ENGLISH = 0;
var SPANISH = 1;
var SYSTEM_LANGUAGE = ["English", "Spanish"];

var MESSAGES = ["Messages", "Mensajes"];
var CAMERA = ["Camera", "Cámara"];
var TRAFFIC = ["Traffic", "Tráfico"];
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
var MAY = ["May", "Mayo"];
var JUNE = ["June", "Junio"];
var JULY = ["July", "Julio"];
var AUGUST = ["August", "Agosto"];
var SEPTEMBER = ["September", "Septiembre"];
var OCTOBER = ["October", "Octubre"];
var NOVEMBER = ["November", "Noviembre"];
var DECEMBER = ["December", "Diciembre"];

// stuff for settings
var USERS = ["Users", "Usuarios"];
var LANGUAGE = ["Language", "Lenguaje"];
var DOORBELL = ["Doorbell", "Timbre"];
var BRIGHTNESS = ["Brightness", "Brillo"];
var THEME = ["Theme", "Tema"];
var DATE_TIME = ["Date/Time", "Fecha/Tiempo"];
var UNITS = ["Units", "Unidades"];
var VOLUME = ["Volume", "Volumen"];
var INTERCOM = ["Intercom", "Intercomunicador"];

// when called, this function will update the text of the respective
// faric text object with a string that matches that object and the currently
// set language
function UpdateText() {
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
  
  UsersText.text = USERS[syslang];
  LanguageText.text = LANGUAGE[syslang];
  TrafficText.text = TRAFFIC[syslang];
  DatetimeText.text = DATE_TIME[syslang];
  DoorbellText.text = DOORBELL[syslang];
  UnitsText.text = UNITS[syslang];
  BrightnessText.text = BRIGHTNESS[syslang];
  VolumeText.text = VOLUME[syslang];
  ThemesText.text = THEME[syslang];
  IntercomText.text = INTERCOM[syslang];
}
/***********************************************************************
                           END OF DATE AND TIME
************************************************************************/

function Registered_Users() {
  this.users = [];

  this.lenth = 0;
  
  this.at = function(index) {
    return this.users[index];
  }
  
  this.removeUserByID = function (id) {
    this.users.splice(id,1);
  }
  this.removeUserByName = function( firstname, lastname) {
    var l = RegisteredUsers.length;
    for(var i=0; i < l; i++) {
      if(this.users[i].lastname == lastname && this.users[i].firstname == firstname){
        this.users[i].splice(i,1);
        this.lenth--;
        break;
      }
    }
  }

  this.addUser = function(user) {
    this.users.push(user);
    this.lenth++;
    
  }
  
}

var RegisteredUsers = new Registered_Users();

var userscounter = 0;
// Created a User class to hold the personal information common to all users

function User(firstname, lastname, language) {
  this.id = userscounter++; // id is position in Registered Users array
  this.firstname = firstname;
  this.lastname = lastname;

  this.language = language; // an int

  this.date_format = DATE_MONTHDDYYYY;
  this.time_format = TIME_12HOUR;

  // fahrenheit or celsius
  // Fahrenheit by default
  this.temerature_units = F;

  this.in_theme = 'default';
  this.out_theme = 'default';

  this.in_ornament = 'default';
  this.out_ornament = 'default';

  this.getFullName = function () {
    return this.firstname + " " + this.lastname;
  }
  
  this.myObjects = [];
  this.addObject = function(object) {
    object.id = this.id;
    this.myObjects.push(object);
  }
  this.hideObjects = function() {
    for( var i=0; i < this.myObjects.length; i++) {
      this.myObjects[i].visible = false;
    }
  }
  this.showObjects = function() {
    for( var i=0; i < this.myObjects.length; i++) {
      this.myObjects[i].visible = true;
    }
  }
  this.myMessages = [];
  this.showMessages = function () {
    console.log("showMessages is not yet implemented. see gabe.js");
  }
  this.hideMessages = function() {
    console.log("hideMessages is not yet implemented. see gabe.js");
  }

  RegisteredUsers.addUser(this);

  this.RemoveFromRegisteredUsers = function() {
    RemoveFromRadioChoices(this.id);
    RegisteredUsers.removeUserByID(this.id);
  }
  AddUserToRadioChoices(this.firstname + " " + this.lastname, this.id);
}

var RADIO_ID_UFI = "UsersFromInside";
var RADIO_ID_UFO = "UsersFromOutside";

function RemoveFromRadioChoices(id) {
  //console.log("removing " + id);
  var remove = 3 + id;
  var inside = document.getElementById(RADIO_ID_UFI);
  var outside = document.getElementById(RADIO_ID_UFO);
  inside.removeChild(inside.children[remove]);
  outside.removeChild(outside.children[remove]);

}

function AddUserToRadioChoices( name , value) {
  var UsersFromInside = document.getElementById(RADIO_ID_UFI);
  var label = document.createElement("label");
  var element = document.createElement("input");
  element.setAttribute("type", "radio");
  element.setAttribute("value", value);
  element.setAttribute("name", "UsersIn");
  element.setAttribute("class", "radio1");
  element.setAttribute("onchange", "LoadUserData_Inside(this.value)");
  label.appendChild(element);
  label.innerHTML += " " + name + '<br/>';
  UsersFromInside.appendChild(label);

  var UsersFromOutside= document.getElementById(RADIO_ID_UFO);
  var label2 = document.createElement("label");
  var element2 = document.createElement("input");
  element2.setAttribute("type", "radio");
  element2.setAttribute("value", value);
  element2.setAttribute("name", "UsersOut");
  element2.setAttribute("class", "radio1");
  element2.setAttribute("onchange", "LoadUserData_Outside(this.value)");
  label2.appendChild(element2);
  label2.innerHTML += " " + name + '<br/>';
  UsersFromOutside.appendChild(label2);
}

var CURRENT_USER = null;
function LoadUserData_Inside(index ) {
  console.log("LoadUserData_Inside(" + index + ")");
  CURRENT_USER = RegisteredUsers.at(index)
  console.log("Now Loading data for " + CURRENT_USER.getFullName() );
  
  var i;
  HideHome();
  HideUsersList();
  HideUser1FromInside();
  HideUser2FromInside();
  HideUsersList();
  CloseCamera();
  HideMirror();
  HideTraffic();
  HideLights();
  HideTransport();
  HideNews();

  for(i=0; i< RegisteredUsers.length; i++) {
    RegisteredUsers.at(i).hideObjects();
  }

  RegisteredUsers.at(index).showObjects();
  
  syslang = RegisteredUsers.at(index).language;
  In_theme = RegisteredUsers.at(index).in_theme;
  In_ornament = RegisteredUsers.at(index).in_ornament;
  Out_theme = RegisteredUsers.at(index).out_theme;
  Out_ornament = RegisteredUsers.at(i).out_ornament;

  Date_format = RegisteredUsers.at(index).date_format;
  Time_format = RegisteredUsers.at(index).time_format;
  TemperatureUnits = RegisteredUsers.at(index).temerature_units;
  UpdateText();
}

function LoadUserData_Outside(index ) {
  console.log("LoadUserData_Outside() is not yet implemented. On Todo List in gabe.js");

}

function MultiUsersOutside() {
  console.log("MultiUsersFromOutside not yet implemented. On Todo List in gabe.js");
}





